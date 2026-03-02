const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator - Basic Operations', () => {
  
  // ===== ADDITION TESTS =====
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add example: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
      expect(add(-10, 4)).toBe(-6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(1.1, 2.2)).toBeCloseTo(3.3, 5);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ===== SUBTRACTION TESTS =====
  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract example: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
      expect(subtract(-3, -5)).toBe(2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 2.3)).toBeCloseTo(8.2, 5);
    });

    test('should subtract large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  // ===== MULTIPLICATION TESTS =====
  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply example: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
      expect(multiply(1, 100)).toBe(100);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2.5)).toBeCloseTo(3.75, 5);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 5000)).toBe(5000000);
    });
  });

  // ===== DIVISION TESTS =====
  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide example: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333, 5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide by one', () => {
      expect(divide(100, 1)).toBe(100);
    });

    test('should divide negative numbers', () => {
      expect(divide(-20, 5)).toBe(-4);
      expect(divide(20, -5)).toBe(-4);
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(20, 0)).toThrow('Division by zero is not allowed');
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2.5)).toBeCloseTo(4.2, 5);
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  // ===== CALCULATE FUNCTION TESTS =====
  describe('Calculate - Full Integration', () => {
    test('should calculate with addition operator', () => {
      expect(calculate('2', '+', '3')).toBe(5);
    });

    test('should calculate with subtraction operator', () => {
      expect(calculate('10', '-', '4')).toBe(6);
    });

    test('should calculate with multiplication operator', () => {
      expect(calculate('45', '*', '2')).toBe(90);
    });

    test('should calculate with division operator', () => {
      expect(calculate('20', '/', '5')).toBe(4);
    });

    test('should handle string inputs and convert to numbers', () => {
      expect(calculate('100', '+', '50')).toBe(150);
      expect(calculate('25.5', '-', '0.5')).toBeCloseTo(25, 1);
    });

    test('should throw error for invalid operator', () => {
      expect(() => calculate('10', '%', '5')).toThrow('Invalid operator');
    });

    test('should throw error for invalid numbers', () => {
      expect(() => calculate('abc', '+', '5')).toThrow('Invalid input');
      expect(() => calculate('10', '+', 'xyz')).toThrow('Invalid input');
    });

    test('should handle division by zero in calculate', () => {
      expect(() => calculate('10', '/', '0')).toThrow('Division by zero');
    });
  });

  // ===== EDGE CASES =====
  describe('Edge Cases', () => {
    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 5)).toBe(5);
      expect(Object.is(multiply(-0, 10), -0) || Object.is(multiply(-0, 10), 0)).toBe(true);
    });

    test('should maintain precision with decimal operations', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });

    test('should handle scientific notation numbers', () => {
      expect(multiply(1e5, 2e3)).toBe(2e8);
      expect(divide(1e6, 1e3)).toBe(1e3);
    });
  });

  // ===== MODULO TESTS =====
  describe('Modulo', () => {
    test('should calculate remainder of two positive numbers', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(modulo(-17, 5)).toBe(-2);
      expect(modulo(17, -5)).toBe(2);
    });

    test('should return zero when number is divisible', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should calculate modulo with decimals', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 5);
    });
  });

  // ===== POWER TESTS =====
  describe('Power', () => {
    test('should calculate power with positive exponent', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
      expect(power(100, 0)).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
      expect(power(10, -1)).toBe(0.1);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
      expect(power(27, 1/3)).toBeCloseTo(3, 5);
    });

    test('should calculate square using power', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate cube using power', () => {
      expect(power(3, 3)).toBe(27);
    });
  });

  // ===== SQUARE ROOT TESTS =====
  describe('Square Root', () => {
    test('should calculate square root of positive numbers', () => {
      expect(squareRoot(16)).toBe(4);
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root with decimal result', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421, 5);
      expect(squareRoot(3)).toBeCloseTo(1.73205, 5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error on square root of negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
      expect(() => squareRoot(-16)).toThrow('Square root of negative number is not allowed');
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.0001)).toBeCloseTo(0.01, 5);
    });
  });
});
