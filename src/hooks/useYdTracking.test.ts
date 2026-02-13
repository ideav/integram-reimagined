import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useYdTracking } from './useYdTracking';

describe('useYdTracking', () => {
  let originalLocation: Location;

  beforeEach(() => {
    // Store original location
    originalLocation = window.location;

    // Clear cookies before each test
    document.cookie = 'yd_param=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Mock console.log to avoid cluttering test output
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original location
    window.location = originalLocation;
  });

  it('does not set cookie when yd parameter is not present', () => {
    // Mock window.location.search to return empty query string
    Object.defineProperty(window, 'location', {
      value: { search: '', origin: 'http://localhost' },
      writable: true,
    });

    renderHook(() => useYdTracking());

    expect(document.cookie).not.toContain('yd_param');
  });

  it('sets cookie when yd parameter is present in URL', () => {
    // Mock window.location with yd parameter
    Object.defineProperty(window, 'location', {
      value: { search: '?yd=test123', origin: 'http://localhost' },
      writable: true,
    });

    renderHook(() => useYdTracking());

    expect(document.cookie).toContain('yd_param=test123');
  });

  it('handles capitalized Yd parameter', () => {
    // Mock window.location with Yd parameter
    Object.defineProperty(window, 'location', {
      value: { search: '?Yd=test456', origin: 'http://localhost' },
      writable: true,
    });

    renderHook(() => useYdTracking());

    expect(document.cookie).toContain('yd_param=test456');
  });

  it('updates integram.io links with yd parameter', () => {
    // Create mock links
    const link1 = document.createElement('a');
    link1.href = 'https://integram.io/terms.html';
    document.body.appendChild(link1);

    const link2 = document.createElement('a');
    link2.href = 'https://integram.io/login.html';
    document.body.appendChild(link2);

    // Mock window.location with yd parameter
    Object.defineProperty(window, 'location', {
      value: { search: '?yd=campaign789', origin: 'http://localhost' },
      writable: true,
    });

    renderHook(() => useYdTracking());

    expect(link1.href).toContain('yd=campaign789');
    expect(link2.href).toContain('yd=campaign789');

    // Clean up
    document.body.removeChild(link1);
    document.body.removeChild(link2);
  });

  it('does not add yd parameter twice to the same link', () => {
    // Create a link that already has yd parameter
    const link = document.createElement('a');
    link.href = 'https://integram.io/terms.html?yd=existing';
    document.body.appendChild(link);

    // Mock window.location with different yd parameter
    Object.defineProperty(window, 'location', {
      value: { search: '?yd=new123', origin: 'http://localhost' },
      writable: true,
    });

    renderHook(() => useYdTracking());

    // Should keep the original yd parameter
    expect(link.href).toContain('yd=existing');
    // Count occurrences of 'yd=' in the URL
    const ydCount = (link.href.match(/yd=/g) || []).length;
    expect(ydCount).toBe(1);

    // Clean up
    document.body.removeChild(link);
  });

  it('handles errors gracefully for invalid URLs', () => {
    // Create a link with potentially problematic href
    const link = document.createElement('a');
    link.setAttribute('href', 'javascript:void(0)');
    link.textContent = 'integram.io';
    document.body.appendChild(link);

    // Mock window.location with yd parameter
    Object.defineProperty(window, 'location', {
      value: { search: '?yd=test', origin: 'http://localhost' },
      writable: true,
    });

    // Should not throw error
    expect(() => renderHook(() => useYdTracking())).not.toThrow();

    // Clean up
    document.body.removeChild(link);
  });
});
