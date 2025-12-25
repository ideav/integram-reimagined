import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactRu } from './Contact-ru';

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

describe('ContactRu', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn();
  });

  it('renders the main heading', () => {
    render(<ContactRu />);
    expect(screen.getByText(/Готовы избавиться от Excel-хаоса/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ContactRu />);
    expect(screen.getByText(/Оставьте заявку на бесплатную консультацию/i)).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<ContactRu />);
    expect(screen.getByLabelText(/Ваше имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Телефон/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Компания/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Расскажите о вашей задаче/i)).toBeInTheDocument();
  });

  it('has required fields marked', () => {
    render(<ContactRu />);
    const nameInput = screen.getByLabelText(/Ваше имя/i);
    const phoneInput = screen.getByLabelText(/Телефон/i);
    const emailInput = screen.getByLabelText(/Email/i);

    expect(nameInput).toBeRequired();
    expect(phoneInput).toBeRequired();
    expect(emailInput).toBeRequired();
  });

  it('renders submit button', () => {
    render(<ContactRu />);
    expect(screen.getByRole('button', { name: /Отправить заявку/i })).toBeInTheDocument();
  });

  it('has privacy policy link', () => {
    render(<ContactRu />);
    const privacyLink = screen.getByRole('link', { name: /Правилами использования/i });
    expect(privacyLink).toHaveAttribute('href', 'https://integram.io/terms.html');
  });

  it('allows typing in form fields', async () => {
    render(<ContactRu />);
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText(/Ваше имя/i);
    await user.type(nameInput, 'Иван Иванов');
    expect(nameInput).toHaveValue('Иван Иванов');

    const emailInput = screen.getByLabelText(/Email/i);
    await user.type(emailInput, 'ivan@example.com');
    expect(emailInput).toHaveValue('ivan@example.com');
  });

  it('disables button when submitting', async () => {
    // Mock slow response to test loading state
    (global.fetch as typeof fetch).mockImplementationOnce(() =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: async () => ({ success: true }),
          });
        }, 100);
      })
    );

    render(<ContactRu />);
    const user = userEvent.setup();

    // Fill in required fields
    await user.type(screen.getByLabelText(/Ваше имя/i), 'Иван Иванов');
    await user.type(screen.getByLabelText(/Телефон/i), '+7 999 123 45 67');
    await user.type(screen.getByLabelText(/Email/i), 'ivan@example.com');

    // Submit form
    const submitButton = screen.getByRole('button', { name: /Отправить заявку/i });
    await user.click(submitButton);

    // Button should be disabled during submission
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });
});
