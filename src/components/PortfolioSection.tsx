import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG, type ShowcaseProject } from '../data/siteConfig';
import {
  ALL_PROJECTS_FILTER,
  filterProjectsByCategory,
  getProjectCategories,
  type ProjectFilterOption,
} from '../utils/portfolio';
import { Reveal } from './Reveal';

interface PortfolioSectionProps {
  onSelectProject: (project: ShowcaseProject) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const { kicker, title, subtitle, projects } = SITE_CONFIG.portfolioSection;
  const categories = getProjectCategories(projects);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterOption>(ALL_PROJECTS_FILTER);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects = filterProjectsByCategory(projects, selectedCategory);

  return (
    <section
      id="projetos"
      className="border-t border-white/8 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-zinc-400">
            {kicker}
          </p>
          <h2
            className="mt-3 text-[clamp(2rem,3.8vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.025em] text-white"
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Functional category filter buttons — single-line row on desktop */}
        <div className="mt-8">
          <div
            role="tablist"
            aria-label="Filtrar projetos demonstrativos por categoria"
            className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#0B0B0E] p-1.5"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[40px] cursor-pointer whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B85FF] ${
                    isActive
                      ? 'bg-[#8B85FF] text-black'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Large 2-column Resize showcase grid */}
        <div
          data-testid="portfolio-grid"
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2"
        >
          {visibleProjects.map((project, index) => {
            const hasImageError = Boolean(failedImages[project.id]);
            return (
              <Reveal key={project.id} delayMs={index * 60}>
                <article className="group">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Visualizar projeto demonstrativo: ${project.title}`}
                  className="block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0C0C0E]">
                    {!hasImageError ? (
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [project.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#14141B] via-[#0C0C0E] to-[#08080A] p-8">
                        <span className="text-xs font-medium text-[#8B85FF]">
                          {project.category}
                        </span>
                        <p className="text-xl font-medium text-white">
                          {project.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Clean unboxed metadata below image — zero pill badges */}
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-[#B4B0FF] sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.statusLabel}</span>
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors duration-200 group-hover:border-[#8B85FF] group-hover:bg-[#8B85FF] group-hover:text-black"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
