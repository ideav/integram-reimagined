import { useEffect, useRef, useState } from "react";

interface TurnstileProps {
  siteKey: string;
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpired?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  appearance?: "always" | "interaction-only";
  className?: string;
}

interface TurnstileRenderOptions {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  appearance?: "always" | "interaction-only";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
}

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: () => void;
    onTurnstileExpired?: () => void;
    turnstile?: {
      render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

export const TurnstileWidget = ({
  siteKey,
  onSuccess,
  onError,
  onExpired,
  theme = "auto",
  size = "normal",
  appearance = "always",
  className = "",
}: TurnstileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  useEffect(() => {
    const loadScript = () => {
      if (!window.turnstile) {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setIsLoaded(true);
        };
        document.head.appendChild(script);
      } else {
        setIsLoaded(true);
      }
    };

    loadScript();
  }, []);

  useEffect(() => {
    if (!isLoaded || !containerRef.current || !window.turnstile) return;

    // Set up callback functions
    window.onTurnstileSuccess = (token: string) => {
      onSuccess?.(token);
    };

    window.onTurnstileError = () => {
      onError?.();
    };

    window.onTurnstileExpired = () => {
      onExpired?.();
    };

    // Render the widget
    try {
      // Remove existing widget if it exists
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }

      const id = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        size,
        appearance,
        callback: (token: string) => {
          onSuccess?.(token);
        },
        "error-callback": () => {
          onError?.();
        },
        "expired-callback": () => {
          onExpired?.();
        },
      } as TurnstileRenderOptions);
      setWidgetId(id);
    } catch (error) {
      console.error("Failed to render Turnstile widget:", error);
      onError?.();
    }

    return () => {
      // Cleanup widget on unmount
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [isLoaded, siteKey, theme, size, appearance, onSuccess, onError, onExpired, widgetId]);

  return (
    <div className={className}>
      <div ref={containerRef} />
    </div>
  );
};