import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { ShowcaseProject } from '../data/siteConfig';
import { ActionArrowBadge } from './ActionArrowBadge';

interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export function ProjectModal({
  project,
  onClose,
  onRequestSimilar,
}: ProjectModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/12 bg-[#0B0B0E] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0B0B0E]/95 px-6 py-4 backdrop-blur-md">
          <p className="text-xs font-medium text-zinc-400">
            <span>{project.category}</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span className="text-[#B4B0FF]">{project.statusLabel}</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar visualização do projeto"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B85FF]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            {!imageError ? (
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#121218] p-6 text-center text-sm text-zinc-400">
                {project.title}
              </div>
            )}
          </div>

          <h3
            id="project-modal-title"
            className="mt-6 text-2xl font-medium tracking-tight text-white sm:text-3xl"
          >
            {project.title}
          </h3>
          <p className="mt-2 text-base text-zinc-300">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
            <div>
              <h4 className="text-xs font-medium tracking-wide text-zinc-400">
                Direcionamento estratégico
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {project.architectureHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="text-[#8B85FF]">
                      —
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-wide text-zinc-400">
                Escopo ilustrativo
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {project.deliverables.join(' · ')}
              </p>
              {project.isConcept && (
                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  Demonstração conceitual desenvolvida para apresentar estética,
                  estrutura e padrão de entrega da {project.category.toLowerCase()}.
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-end gap-4 border-t border-white/10 pt-6">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#8B85FF] px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#A39EFF]"
              >
                <span>Visitar site</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onRequestSimilar(project.category)}
                className="group inline-flex min-h-[46px] cursor-pointer items-center gap-3.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white transition-colors hover:border-[#8B85FF]/60 hover:bg-white/[0.1]"
              >
                <span>Solicitar projeto nesta linha</span>
                <ActionArrowBadge size="sm" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
