import { useEffect } from 'react';

/**
 * Get a query parameter value from the current URL
 */
const getQueryParam = (name: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

/**
 * Set a cookie with a specified expiration time
 */
const setCookie = (name: string, value: string, days: number): void => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

/**
 * Hook to handle Yd parameter tracking and update integram.io links
 * This hook:
 * 1. Checks for 'yd' or 'Yd' query parameter in the URL
 * 2. Stores it in a cookie for 365 days
 * 3. Appends the parameter to all links pointing to integram.io
 */
export const useYdTracking = () => {
  useEffect(() => {
    // Get yd parameter from URL (check both lowercase and capitalized versions)
    const ydParam = getQueryParam('yd') || getQueryParam('Yd');

    if (ydParam) {
      // Store the parameter in a cookie
      setCookie('yd_param', ydParam, 365);

      // Update all links pointing to integram.io
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="integram.io"]');
      console.log('Found integram.io links:', links.length);

      links.forEach((element) => {
        const href = element.getAttribute('href');
        if (href) {
          try {
            // Create URL object, using window.location.origin as base for relative links
            const url = new URL(href, window.location.origin);

            // Append yd parameter if not already present
            if (!url.searchParams.has('yd')) {
              url.searchParams.append('yd', ydParam);
              element.setAttribute('href', url.toString());
            }
          } catch (error) {
            console.error('Error updating link:', href, error);
          }
        }
      });
    }
  }, []);
};
