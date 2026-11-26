export interface BriefingInput {
  name: string;
  company: string;
  service: string;
  goal: string;
}

export interface BriefingValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof BriefingInput, string>>;
}

export function validateBriefingInput(input: BriefingInput): BriefingValidationResult {
  const errors: Partial<Record<keyof BriefingInput, string>> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Informe seu nome para continuar.';
  }

  if (!input.company.trim() || input.company.trim().length < 2) {
    errors.company = 'Informe o nome da empresa ou projeto.';
  }

  if (!input.service.trim()) {
    errors.service = 'Selecione o tipo de serviço desejado.';
  }

  if (!input.goal.trim() || input.goal.trim().length < 10) {
    errors.goal = 'Descreva brevemente o objetivo do site (mínimo de 10 caracteres).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildInstagramBriefingMessage(input: BriefingInput): string {
  const name = input.name.trim();
  const company = input.company.trim();
  const service = input.service.trim();
  const goal = input.goal.trim();

  return [
    'Olá, Daniel! Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${name}`,
    `Empresa / Projeto: ${company}`,
    `Serviço de interesse: ${service}`,
    `Objetivo: ${goal}`,
  ].join('\n');
}
