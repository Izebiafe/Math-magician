import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('should handle AC button', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  it('should handle operation buttons', () => {
    const result1 = calculate({ next: '5' }, '+');
    expect(result1).toEqual({ total: '5', next: null, operation: '+' });


  });
})