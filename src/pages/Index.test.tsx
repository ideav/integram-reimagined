import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Index from './Index';

describe('Index Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Index />);
    expect(container).toBeTruthy();
  });

  it('has the correct structure with header and main sections', () => {
    const { container } = render(<Index />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('pt-16');
  });

  it('renders all main sections', () => {
    const { container } = render(<Index />);
    expect(container.querySelector('#solution')).toBeInTheDocument();
    expect(container.querySelector('#use-cases')).toBeInTheDocument();
    expect(container.querySelector('#process')).toBeInTheDocument();
    expect(container.querySelector('#faq')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('has minimum height for full screen display', () => {
    const { container } = render(<Index />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('min-h-screen');
  });
});
