/**
 * Testes Unitários - Utilitários de IMC
 * 
 * Work Item: DEMO-001
 * Test Case: TC-DEMO-001-001
 */

import {
  calculateBMI,
  classifyBMI,
  validateWeight,
  validateHeight
} from '../../src/utils/bmi';

describe('calculateBMI', () => {
  it('deve calcular IMC corretamente para valores válidos', () => {
    // Peso: 70kg, Altura: 1.75m
    // IMC esperado: 70 / (1.75 * 1.75) = 22.86
    const result = calculateBMI(70, 1.75);
    expect(result).toBeCloseTo(22.86, 2);
  });

  it('deve retornar 2 casas decimais', () => {
    const result = calculateBMI(65, 1.70);
    const decimalPlaces = (result.toString().split('.')[1] || '').length;
    expect(decimalPlaces).toBeLessThanOrEqual(2);
  });

  it('deve lançar erro para peso zero', () => {
    expect(() => calculateBMI(0, 1.75)).toThrow('Peso e altura devem ser maiores que zero');
  });

  it('deve lançar erro para altura zero', () => {
    expect(() => calculateBMI(70, 0)).toThrow('Peso e altura devem ser maiores que zero');
  });

  it('deve lançar erro para altura fora do range', () => {
    expect(() => calculateBMI(70, 0.3)).toThrow('Altura deve estar entre 0.5 e 2.5 metros');
    expect(() => calculateBMI(70, 3.0)).toThrow('Altura deve estar entre 0.5 e 2.5 metros');
  });

  it('deve lançar erro para peso fora do range', () => {
    expect(() => calculateBMI(0.5, 1.75)).toThrow('Peso deve estar entre 1 e 500 kg');
    expect(() => calculateBMI(600, 1.75)).toThrow('Peso deve estar entre 1 e 500 kg');
  });
});

describe('classifyBMI', () => {
  it('deve classificar como abaixo do peso', () => {
    const result = classifyBMI(17.5);
    expect(result.category).toBe('underweight');
    expect(result.label).toBe('Abaixo do peso');
  });

  it('deve classificar como peso normal', () => {
    const result = classifyBMI(22.0);
    expect(result.category).toBe('normal');
    expect(result.label).toBe('Peso normal');
  });

  it('deve classificar como sobrepeso', () => {
    const result = classifyBMI(27.5);
    expect(result.category).toBe('overweight');
    expect(result.label).toBe('Sobrepeso');
  });

  it('deve classificar como obesidade', () => {
    const result = classifyBMI(32.0);
    expect(result.category).toBe('obesity');
    expect(result.label).toBe('Obesidade');
  });

  it('deve incluir valor do IMC na classificação', () => {
    const bmi = 23.5;
    const result = classifyBMI(bmi);
    expect(result.value).toBe(bmi);
  });
});

describe('validateWeight', () => {
  it('deve validar peso dentro do range', () => {
    expect(validateWeight(70)).toBe(true);
    expect(validateWeight(1)).toBe(true);
    expect(validateWeight(500)).toBe(true);
  });

  it('deve rejeitar peso fora do range', () => {
    expect(validateWeight(0)).toBe(false);
    expect(validateWeight(501)).toBe(false);
  });
});

describe('validateHeight', () => {
  it('deve validar altura dentro do range', () => {
    expect(validateHeight(1.75)).toBe(true);
    expect(validateHeight(0.5)).toBe(true);
    expect(validateHeight(2.5)).toBe(true);
  });

  it('deve rejeitar altura fora do range', () => {
    expect(validateHeight(0.4)).toBe(false);
    expect(validateHeight(2.6)).toBe(false);
  });
});

