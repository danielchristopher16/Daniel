import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ActionArrowBadge } from './ActionArrowBadge';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  onOpenBriefing: (preselectedService?: string) => void;
}

export function ContactSection({ onOpenBriefing }: ContactSectionProps) {
  const { kicker, title, description, primaryCta, secondaryCta } =
    SITE_CONFIG.contactSection;
  const { instagramUrl, whatsappUrl } = SITE_CONFIG.contact;

  return (
    <section
      id="contato"
      className="border-t border-white/8 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#09090C] px-6 py-16 sm:px-12 sm:py-24 lg:px-16">
          {/* Subtle atmospheric lavender glow in top-right corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#8B85FF]/15 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-medium tracking-wide text-zinc-400">
              {kicker}
            </p>
            <h2
              className="mt-4 text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center gap-3.5 whitespace-nowrap shrink-0 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white transition-colors duration-200 hover:border-[#8B85FF]/60 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
              >
                <span>{primaryCta}</span>
                <ActionArrowBadge />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap shrink-0 rounded-full border border-white/12 px-6 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
              >
                <span>{secondaryCta}</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </a>

              <button
                type="button"
                onClick={() => onOpenBriefing()}
                className="inline-flex min-h-[44px] cursor-pointer items-center whitespace-nowrap shrink-0 px-3 py-2 text-sm font-medium text-[#B4B0FF] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
              >
                Montar briefing rápido
              </button>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap shrink-0 rounded-full border border-white/12 px-6 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-white/30 hover:text-white"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
