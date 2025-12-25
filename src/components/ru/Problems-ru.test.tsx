import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProblemsRu } from './Problems-ru';

describe('ProblemsRu', () => {
  it('renders the main heading', () => {
    render(<ProblemsRu />);
    expect(screen.getByText(/Если ваш бизнес-процесс живёт в Excel/i)).toBeInTheDocument();
  });

  it('renders all 6 problem cards', () => {
    render(<ProblemsRu />);
    expect(screen.getByText('Конфликт версий')).toBeInTheDocument();
    expect(screen.getByText('Ошибки в формулах')).toBeInTheDocument();
    expect(screen.getByText('Нет защиты данных')).toBeInTheDocument();
    expect(screen.getByText('Хаос и непрозрачность')).toBeInTheDocument();
    expect(screen.getByText('Медленно и не масштабируется')).toBeInTheDocument();
    expect(screen.getByText('Ограниченные возможности таблиц')).toBeInTheDocument();
  });

  it('renders problem descriptions', () => {
    render(<ProblemsRu />);
    expect(screen.getByText(/Какой файл актуальный/i)).toBeInTheDocument();
    expect(screen.getByText(/Одна неверная ячейка/i)).toBeInTheDocument();
  });

  it('renders the quote about Excel limitations', () => {
    render(<ProblemsRu />);
    expect(screen.getByText(/Excel — это отличный калькулятор/i)).toBeInTheDocument();
  });

  it('has proper semantic structure with cards', () => {
    const { container } = render(<ProblemsRu />);
    // Check for card elements by looking for the border-l-4 class that's on all problem cards
    const cards = container.querySelectorAll('.border-l-4');
    expect(cards.length).toBeGreaterThanOrEqual(6);
  });
});
