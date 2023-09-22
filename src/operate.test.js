import operate from '../src/logic/operate';


describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('4', '2', '+');
    expect(result).toBe('6');
  });

  it('should subtract two numbers', () => {
    const result = operate('4', '2', '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers', () => {
    const result = operate('4', '2', 'x');
    expect(result).toBe('8');
  });

  it('should divide two numbers', () => {
    const result = operate('4', '2', '÷');
    expect(result).toBe('2');
  });

  it("should handle division by 0 gracefully", () => {
    const result = operate('4', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    const result = operate('5', '3', '%');
    expect(result).toBe('2');
  });

  it("should handle modulo by 0 gracefully", () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('4', '2', '$')).toThrow("Unknown operation '$'");
  });
});