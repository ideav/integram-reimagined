import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SolutionRu } from './Solution-ru';

describe('SolutionRu', () => {
  it('renders the main heading', () => {
    render(<SolutionRu />);
    expect(screen.getByText(/ИНТЕГРАМ — это безопасность и свобода/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<SolutionRu />);
    expect(screen.getByText(/Платформа, которая даёт вам инструменты/i)).toBeInTheDocument();
  });

  it('renders all 6 benefit cards', () => {
    render(<SolutionRu />);
    expect(screen.getByText('Полный контроль над данными')).toBeInTheDocument();
    expect(screen.getByText('Безопасность на уровне предприятия')).toBeInTheDocument();
    expect(screen.getByText('Конструктор для ваших процессов')).toBeInTheDocument();
    expect(screen.getByText('Автоматизация рутины')).toBeInTheDocument();
    expect(screen.getByText('Всегда актуальные данные')).toBeInTheDocument();
    expect(screen.getByText('Совместная работа')).toBeInTheDocument();
  });

  it('renders the on-premise section heading', () => {
    render(<SolutionRu />);
    expect(screen.getByText('Почему on-premise решение?')).toBeInTheDocument();
  });

  it('renders all on-premise benefits', () => {
    render(<SolutionRu />);
    expect(screen.getByText('✓ Ваши данные остаются у вас')).toBeInTheDocument();
    expect(screen.getByText('✓ Независимость от внешних сервисов')).toBeInTheDocument();
    expect(screen.getByText('✓ Настройка под ваши нужды')).toBeInTheDocument();
    expect(screen.getByText('✓ Разумная стоимость владения')).toBeInTheDocument();
  });

  it('describes data security in on-premise section', () => {
    render(<SolutionRu />);
    expect(screen.getByText(/Конфиденциальная информация не покидает вашу инфраструктуру/i)).toBeInTheDocument();
  });

  it('mentions licensing model', () => {
    render(<SolutionRu />);
    expect(screen.getByText(/Один раз платите за лицензию/i)).toBeInTheDocument();
  });
});
