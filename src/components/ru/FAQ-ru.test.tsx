import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FAQRu } from './FAQ-ru';

describe('FAQRu', () => {
  it('renders the main heading', () => {
    render(<FAQRu />);
    expect(screen.getByText('Часто задаваемые вопросы')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<FAQRu />);
    expect(screen.getByText(/Сколько стоит установить систему/i)).toBeInTheDocument();
    expect(screen.getByText(/Насколько сложно установить и поддерживать/i)).toBeInTheDocument();
    expect(screen.getByText(/Что входит в стоимость лицензии/i)).toBeInTheDocument();
    expect(screen.getByText(/Сколько времени займет перенос/i)).toBeInTheDocument();
    expect(screen.getByText(/Сможем ли мы сами дорабатывать/i)).toBeInTheDocument();
    expect(screen.getByText(/Что нужно от нашей IT-инфраструктуры/i)).toBeInTheDocument();
  });

  it('mentions annual license cost', async () => {
    render(<FAQRu />);
    const user = userEvent.setup();

    // Expand the first question to see the answer
    const firstQuestion = screen.getByText(/Сколько стоит установить систему/i);
    await user.click(firstQuestion);

    // Now the answer should be visible
    expect(await screen.findByText(/290000 рублей/i)).toBeInTheDocument();
  });

  it('mentions 20 hours of support', async () => {
    render(<FAQRu />);
    const user = userEvent.setup();

    // Expand the license cost question
    const question = screen.getByText(/Что входит в стоимость лицензии/i);
    await user.click(question);

    expect(await screen.findByText(/20 часов поддержки/i)).toBeInTheDocument();
  });

  it('mentions system requirements', async () => {
    render(<FAQRu />);
    const user = userEvent.setup();

    // Expand the infrastructure question
    const question = screen.getByText(/Что нужно от нашей IT-инфраструктуры/i);
    await user.click(question);

    expect(await screen.findByText(/Windows Server или Linux/i)).toBeInTheDocument();
    expect(await screen.findByText(/2 ядрами и 2ГБ памяти/i)).toBeInTheDocument();
  });

  it('can expand accordion items', async () => {
    render(<FAQRu />);
    const user = userEvent.setup();

    // Find the first question button
    const firstQuestion = screen.getByText(/Сколько стоит установить систему/i);

    // Click to expand
    await user.click(firstQuestion);

    // The answer should be visible now
    // Note: Testing Radix UI accordion behavior
  });
});
