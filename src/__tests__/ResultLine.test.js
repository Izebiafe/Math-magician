import { render, screen } from '@testing-library/react';
import ResultLine from '../components/ResultLine';

describe('ResultLine component', () => {
  test('renders with total, operation, and next props', () => {
    const total = 10;
    const operation = '+';
    const next = '5';

    render(<ResultLine total={total} operation={operation} next={next} />);

    expect(screen.getByText(total)).toBeInTheDocument();
    expect(screen.getByText(operation)).toBeInTheDocument();
    expect(screen.getByText(next)).toBeInTheDocument();
  });
});
