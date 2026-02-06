import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroRu } from './Hero-ru';

describe('HeroRu', () => {
  it('renders the main heading', () => {
    render(<HeroRu />);
    expect(screen.getByText(/Перестаньте работать в режиме авралов/i)).toBeInTheDocument();
  });

  it('renders the subheading about Excel', () => {
    render(<HeroRu />);
    expect(screen.getByText(/Ваш Excel — это бомба замедленного действия/i)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HeroRu />);
    expect(screen.getByText(/ИНТЕГРАМ — это безопасное и удобное управление данными/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<HeroRu />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Получить бесплатную консультацию/i);
  });

  it('renders the data control message', () => {
    render(<HeroRu />);
    expect(screen.getByText(/100% ваши данные. Ваши серверы. Ваш контроль/i)).toBeInTheDocument();
  });

  it('CTA button has correct link to contact section', () => {
    render(<HeroRu />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#contact');
  });
});
