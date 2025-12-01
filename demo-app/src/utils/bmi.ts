/**
 * Utilitários para Cálculo de IMC
 * 
 * Fórmula: IMC = peso (kg) / altura (m)²
 * 
 * Classificação (OMS):
 * - Abaixo do peso: < 18.5
 * - Peso normal: 18.5 - 24.9
 * - Sobrepeso: 25.0 - 29.9
 * - Obesidade: ≥ 30.0
 */

export interface BMIClassification {
  value: number;
  category: 'underweight' | 'normal' | 'overweight' | 'obesity';
  label: string;
  color: string;
}

/**
 * Calcula o IMC
 * @param weight Peso em kg
 * @param height Altura em metros
 * @returns IMC calculado (2 casas decimais)
 */
export function calculateBMI(weight: number, height: number): number {
  if (weight <= 0 || height <= 0) {
    throw new Error('Peso e altura devem ser maiores que zero');
  }
  
  if (height < 0.5 || height > 2.5) {
    throw new Error('Altura deve estar entre 0.5 e 2.5 metros');
  }
  
  if (weight < 1 || weight > 500) {
    throw new Error('Peso deve estar entre 1 e 500 kg');
  }
  
  const bmi = weight / (height * height);
  return Math.round(bmi * 100) / 100; // 2 casas decimais
}

/**
 * Classifica o IMC
 * @param bmi Valor do IMC
 * @returns Classificação do IMC
 */
export function classifyBMI(bmi: number): BMIClassification {
  if (bmi < 18.5) {
    return {
      value: bmi,
      category: 'underweight',
      label: 'Abaixo do peso',
      color: '#3b82f6' // azul
    };
  } else if (bmi < 25) {
    return {
      value: bmi,
      category: 'normal',
      label: 'Peso normal',
      color: '#10b981' // verde
    };
  } else if (bmi < 30) {
    return {
      value: bmi,
      category: 'overweight',
      label: 'Sobrepeso',
      color: '#f59e0b' // amarelo
    };
  } else {
    return {
      value: bmi,
      category: 'obesity',
      label: 'Obesidade',
      color: '#ef4444' // vermelho
    };
  }
}

/**
 * Valida entrada de peso
 * @param weight Peso em kg
 * @returns true se válido
 */
export function validateWeight(weight: number): boolean {
  return weight >= 1 && weight <= 500;
}

/**
 * Valida entrada de altura
 * @param height Altura em metros
 * @returns true se válido
 */
export function validateHeight(height: number): boolean {
  return height >= 0.5 && height <= 2.5;
}

