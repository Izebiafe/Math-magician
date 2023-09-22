import calculate from '../src/logic/calculate';

describe('calculate function', () => {
  it('should handle the "AC" button', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  it('should handle numeric input', () => {
    let result = calculate({}, '5');
    expect(result).toEqual({
      next: '5',
      total: null,
      operation: null,
    });

    result = calculate({ next: '5' }, '0');
    expect(result).toEqual({
      next: '50',
      total: null,
        operation: null,
    });

    result = calculate({ next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      next: '52',
      total: null,
      operation: '+',
    });
  });

  it('should handle the decimal point', () => {
    let result = calculate({}, '.');
    expect(result).toEqual({
      next: '0.',
      total: null,
        operation: null,
    });
  });

  it('should handle the "+/-" button', () => {
    let result = calculate({ next: '5' }, '+/-');
    expect(result).toEqual({
      next: '-5',
      total: null,
        operation: null,
    });
  });

  // Add more test cases to cover other scenarios and edge cases
});