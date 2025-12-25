import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FooterRu } from './Footer-ru';

describe('FooterRu', () => {
  it('renders the INTEGRAM logo', () => {
    render(<FooterRu />);
    const logos = screen.getAllByText('ИНТЕГРАМ');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('renders legal links', () => {
    render(<FooterRu />);
    expect(screen.getByRole('link', { name: /Правила использования/i })).toHaveAttribute('href', 'https://integram.io/terms.html');
    expect(screen.getByRole('link', { name: /Публичная оферта/i })).toHaveAttribute('href', 'https://integram.io/OfferOJSC.pdf');
    expect(screen.getByRole('link', { name: /Платежная информация/i })).toHaveAttribute('href', 'https://integram.io/acct.html');
  });

  it('mentions registration in Russian software registry', () => {
    render(<FooterRu />);
    expect(screen.getByText(/В реестре отечественного ПО/i)).toBeInTheDocument();
    expect(screen.getByText(/запись №30872/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<FooterRu />);
    const solutionsLink = screen.getAllByRole('link', { name: /Решения/i })[0];
    expect(solutionsLink).toHaveAttribute('href', '#solution');
  });

  it('has try it yourself link', () => {
    render(<FooterRu />);
    const tryLink = screen.getByRole('link', { name: /Попробовать своими руками/i });
    expect(tryLink).toHaveAttribute('href', 'https://integram.io/login.html#reg');
    expect(tryLink).toHaveAttribute('target', '_blank');
  });

  it('renders contact information', () => {
    render(<FooterRu />);
    expect(screen.getByText(/info@integram.io/i)).toBeInTheDocument();
    expect(screen.getByText(/\+7 \(995\) 506-0167/i)).toBeInTheDocument();
    expect(screen.getByText(/ИНН 9716002710/i)).toBeInTheDocument();
  });

  it('has Telegram link', () => {
    render(<FooterRu />);
    const telegramLink = screen.getByRole('link', { name: /t\.me\/ideavr/i });
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/ideavr');
    expect(telegramLink).toHaveAttribute('target', '_blank');
  });

  it('renders copyright with current year', () => {
    render(<FooterRu />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('has link to main INTEGRAM site', () => {
    render(<FooterRu />);
    const integramLinks = screen.getAllByRole('link', { name: /ИНТЕГРАМ/i });
    const mainLink = integramLinks.find(link => link.getAttribute('href') === 'https://integram.io');
    expect(mainLink).toBeDefined();
  });
});
