import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProcessRu } from './Process-ru';

describe('ProcessRu', () => {
  it('renders the main heading', () => {
    render(<ProcessRu />);
    expect(screen.getByText('Как это работает?')).toBeInTheDocument();
  });

  it('renders all 3 process steps', () => {
    render(<ProcessRu />);
    expect(screen.getByText('Консультация и проектирование')).toBeInTheDocument();
    expect(screen.getByText('Установка и настройка')).toBeInTheDocument();
    expect(screen.getByText('Запуск и обучение')).toBeInTheDocument();
  });

  it('displays step numbers', () => {
    render(<ProcessRu />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<ProcessRu />);
    expect(screen.getByText(/Наш специалист анализирует ваши процессы/i)).toBeInTheDocument();
    expect(screen.getByText(/Мы устанавливаем ИНТЕГРАМ на ваши серверы/i)).toBeInTheDocument();
    expect(screen.getByText(/Вы переносите данные из Excel/i)).toBeInTheDocument();
  });

  it('renders customer testimonial', () => {
    render(<ProcessRu />);
    expect(screen.getByText(/Мы годами вели планирование производства в Excel/i)).toBeInTheDocument();
    expect(screen.getByText(/Типичный пользователь, директор по производству/i)).toBeInTheDocument();
  });

  it('has emoji in testimonial', () => {
    render(<ProcessRu />);
    expect(screen.getByText('💬')).toBeInTheDocument();
  });
});
