import { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ActionArrowBadge } from './ActionArrowBadge';

interface HeroProps {
  onOpenBriefing: (preselectedService?: string) => void;
}

export function Hero({ onOpenBriefing }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="topo"
      className="relative flex min-h-[680px] lg:min-h-[820px] w-full items-end overflow-hidden bg-black pt-24 pb-16 sm:pb-24"
    >
      {/* Architectural dark backdrop inspired by Resize */}
      <div className="pointer-events-none absolute inset-0">
        {!imageError ? (
          <img
            src={SITE_CONFIG.hero.backdropImage}
            alt={SITE_CONFIG.hero.backdropAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center opacity-90"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(139,133,255,0.28),transparent_60%),linear-gradient(135deg,#000000_0%,#0b0b14_55%,#000000_100%)]" />
        )}
        {/* Measured scrim for seamless top blend and crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      </div>

      {/* Editorial Hero Foreground */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
            {SITE_CONFIG.hero.kicker}
          </p>

          <h1
            className="text-[clamp(2.5rem,5.4vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white"
            style={{ textWrap: 'balance' }}
          >
            {SITE_CONFIG.hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {SITE_CONFIG.hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenBriefing()}
              className="group inline-flex min-h-[48px] cursor-pointer items-center gap-3.5 whitespace-nowrap shrink-0 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#8B85FF]/60 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
            >
              <span>{SITE_CONFIG.hero.primaryCta}</span>
              <ActionArrowBadge />
            </button>

            <a
              href="#projetos"
              className="inline-flex min-h-[44px] items-center whitespace-nowrap shrink-0 border-b border-white/30 pb-0.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-[#8B85FF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
            >
              {SITE_CONFIG.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
