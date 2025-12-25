import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UseCasesRu } from './UseCases-ru';

describe('UseCasesRu', () => {
  it('renders the main heading', () => {
    render(<UseCasesRu />);
    expect(screen.getByText('Примеры использования')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<UseCasesRu />);
    expect(screen.getByText(/ИНТЕГРАМ помогает автоматизировать любые процессы/i)).toBeInTheDocument();
  });

  it('renders all 6 use case cards', () => {
    render(<UseCasesRu />);
    expect(screen.getByText('Производственное планирование')).toBeInTheDocument();
    expect(screen.getByText('Управление проектами')).toBeInTheDocument();
    expect(screen.getByText('Складской учёт')).toBeInTheDocument();
    expect(screen.getByText('Бюджетирование')).toBeInTheDocument();
    expect(screen.getByText('CRM и продажи')).toBeInTheDocument();
    expect(screen.getByText('HR и табельный учёт')).toBeInTheDocument();
  });

  it('shows before/after comparisons', () => {
    render(<UseCasesRu />);
    // Check for "Было:" labels
    const beforeLabels = screen.getAllByText('Было:');
    expect(beforeLabels.length).toBe(6);

    // Check for "Стало:" labels
    const afterLabels = screen.getAllByText('Стало:');
    expect(afterLabels.length).toBe(6);
  });

  it('renders specific use case details', () => {
    render(<UseCasesRu />);
    expect(screen.getByText(/20\+ файлов Excel/i)).toBeInTheDocument();
    expect(screen.getByText(/Единая система планирования/i)).toBeInTheDocument();
  });

  it('uses appropriate icons for before (✗) and after (✓)', () => {
    const { container } = render(<UseCasesRu />);
    // Check for the presence of checkmark and cross symbols in the rendered output
    const htmlContent = container.innerHTML;
    expect(htmlContent).toContain('✓');
    expect(htmlContent).toContain('✗');
  });
});
