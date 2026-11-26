import test from 'node:test';
import assert from 'node:assert/strict';
import { SITE_CONFIG } from '../data/siteConfig';
import {
  ALL_PROJECTS_FILTER,
  filterProjectsByCategory,
  getProjectCategories,
} from './portfolio';
import {
  buildInstagramBriefingMessage,
  validateBriefingInput,
} from './briefing';

test('getProjectCategories includes Todos and all 4 requested categories', () => {
  const categories = getProjectCategories(SITE_CONFIG.portfolioSection.projects);
  assert.equal(categories[0], ALL_PROJECTS_FILTER);
  assert.ok(categories.includes('Clínicas e estética'));
  assert.ok(categories.includes('Empresas e serviços'));
  assert.ok(categories.includes('Negócios locais'));
  assert.ok(categories.includes('Marcas e profissionais'));
});

test('filterProjectsByCategory returns all items for Todos and narrows by category', () => {
  const all = filterProjectsByCategory(SITE_CONFIG.portfolioSection.projects, ALL_PROJECTS_FILTER);
  assert.equal(all.length, SITE_CONFIG.portfolioSection.projects.length);

  const clinics = filterProjectsByCategory(
    SITE_CONFIG.portfolioSection.projects,
    'Clínicas e estética'
  );
  assert.equal(clinics.length, 1);
  assert.equal(clinics[0].category, 'Clínicas e estética');
  assert.equal(clinics[0].isConcept, true);
});

test('every portfolio demonstration explicitly marks itself as a concept when no real URL exists', () => {
  for (const project of SITE_CONFIG.portfolioSection.projects) {
    assert.equal(project.isConcept, true);
    assert.equal(project.liveUrl, null);
    assert.match(project.statusLabel.toLowerCase(), /conceito/);
  }
});

test('validateBriefingInput rejects empty or incomplete inputs and accepts valid data', () => {
  const invalid = validateBriefingInput({
    name: '',
    company: 'A',
    service: '',
    goal: 'Curto',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.company);
  assert.ok(invalid.errors.service);
  assert.ok(invalid.errors.goal);

  const valid = validateBriefingInput({
    name: 'Mariana Silva',
    company: 'Clínica Lumina',
    service: 'Sites Institucionais',
    goal: 'Apresentar procedimentos estéticos e captar agendamentos online.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('buildInstagramBriefingMessage formats clean structured summary', () => {
  const msg = buildInstagramBriefingMessage({
    name: '  Rafael Costa  ',
    company: '  Costa Arquitetura ',
    service: 'Criação de Sites',
    goal: 'Novo site institucional para apresentar projetos residenciais.',
  });
  assert.match(msg, /Nome: Rafael Costa/);
  assert.match(msg, /Empresa \/ Projeto: Costa Arquitetura/);
  assert.match(msg, /Serviço de interesse: Criação de Sites/);
  assert.match(msg, /Objetivo: Novo site institucional/);
});
