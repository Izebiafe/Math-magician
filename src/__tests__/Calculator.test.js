import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('should display initial state when loaded', () => {
    const { getByRole } = render(<Calculator />);
    const resultLine = getByRole('region');
    expect(resultLine.textContent).toBe('0');
  });
});
