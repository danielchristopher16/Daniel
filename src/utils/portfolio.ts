import type { ProjectCategory, ShowcaseProject } from '../data/siteConfig';

export const ALL_PROJECTS_FILTER = 'Todos' as const;

export type ProjectFilterOption = typeof ALL_PROJECTS_FILTER | ProjectCategory;

export function getProjectCategories(projects: readonly ShowcaseProject[]): ProjectFilterOption[] {
  const seen = new Set<ProjectCategory>();
  for (const project of projects) {
    seen.add(project.category);
  }
  return [ALL_PROJECTS_FILTER, ...Array.from(seen)];
}

export function filterProjectsByCategory(
  projects: readonly ShowcaseProject[],
  selectedCategory: ProjectFilterOption
): ShowcaseProject[] {
  if (selectedCategory === ALL_PROJECTS_FILTER) {
    return [...projects];
  }
  return projects.filter((project) => project.category === selectedCategory);
}
