import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import CookieConsent from './CookieConsent';

describe('CookieConsent', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders cookie consent message when not accepted', () => {
    render(<CookieConsent />);
    expect(screen.getByText(/Наш сайт использует cookies/i)).toBeInTheDocument();
    expect(screen.getByText(/Правилами использования/i)).toBeInTheDocument();
  });

  it('does not render when already accepted', () => {
    localStorage.setItem('cookieAccept', '1');
    render(<CookieConsent />);
    expect(screen.queryByText(/Наш сайт использует cookies/i)).not.toBeInTheDocument();
  });

  it('has a link to terms', () => {
    render(<CookieConsent />);
    const termsLink = screen.getByRole('link', { name: /Правилами использования/i });
    expect(termsLink).toHaveAttribute('href', '/terms.html');
  });

  it('has an accept button', () => {
    render(<CookieConsent />);
    const acceptButton = screen.getByRole('button', { name: /Принять/i });
    expect(acceptButton).toBeInTheDocument();
  });

  it('hides message and sets localStorage when accept is clicked', async () => {
    render(<CookieConsent />);

    const acceptButton = screen.getByRole('button', { name: /Принять/i });

    fireEvent.click(acceptButton);

    // Check localStorage is set immediately
    expect(localStorage.getItem('cookieAccept')).toBe('1');

    // Wait for the animation and state update
    await waitFor(
      () => {
        expect(screen.queryByText(/Наш сайт использует cookies/i)).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('applies correct CSS classes for positioning', () => {
    const { container } = render(<CookieConsent />);
    const cookieDiv = container.firstChild as HTMLElement;

    expect(cookieDiv).toHaveClass('fixed');
    expect(cookieDiv).toHaveClass('bottom-5');
    expect(cookieDiv).toHaveClass('left-5');
    expect(cookieDiv).toHaveClass('right-5');
  });
});
