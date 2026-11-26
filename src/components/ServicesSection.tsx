import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ActionArrowBadge } from './ActionArrowBadge';
import { Reveal } from './Reveal';

interface ServicesSectionProps {
  onOpenBriefing: (preselectedService?: string) => void;
}

export function ServicesSection({ onOpenBriefing }: ServicesSectionProps) {
  const { kicker, headlineWhite, headlineMuted, ctaLabel, items } =
    SITE_CONFIG.servicesSection;

  return (
    <section
      id="servicos"
      className="border-t border-white/8 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky Editorial Column matching Resize */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <p className="text-xs font-medium tracking-wide text-zinc-400">
                {kicker}
              </p>

              <h2
                className="mt-4 text-[clamp(1.85rem,3.4vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.025em]"
                style={{ textWrap: 'balance' }}
              >
                <span className="text-white">{headlineWhite}</span>{' '}
                <span className="text-zinc-500">{headlineMuted}</span>
              </h2>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onOpenBriefing()}
                  className="group inline-flex min-h-[44px] cursor-pointer items-center gap-3.5 whitespace-nowrap shrink-0 text-sm font-medium text-white transition-colors duration-200 hover:text-[#B4B0FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
                >
                  <span>{ctaLabel}</span>
                  <ActionArrowBadge />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Numbered Service Rows */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/10">
              {items.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => onOpenBriefing(service.title)}
                  aria-label={`Solicitar orçamento para ${service.title}`}
                  className="group flex w-full cursor-pointer items-start justify-between gap-6 border-b border-white/10 py-8 text-left transition-colors duration-200 hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8B85FF]"
                >
                  <div className="flex items-start gap-6 sm:gap-10">
                    <span className="pt-1 font-mono text-sm text-zinc-500 tabular-nums transition-colors duration-200 group-hover:text-[#8B85FF]">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-[#B4B0FF] sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                        {service.description}
                      </p>
                      <p className="mt-1.5 max-w-lg text-xs leading-relaxed text-zinc-500 sm:text-sm">
                        {service.details}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-flex h-8 w-8 shrink-0 items-center justify-center text-zinc-400 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-[#8B85FF]"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
