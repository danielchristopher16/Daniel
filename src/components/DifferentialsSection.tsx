import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function DifferentialsSection() {
  const { kicker, lead, headlineWhite, headlineMuted, items } =
    SITE_CONFIG.differentialsSection;

  return (
    <section
      id="diferenciais"
      className="border-t border-white/8 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Two-column editorial split matching Resize's signature typography contrast */}
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-wide text-zinc-400">
              {kicker}
            </p>
            <p className="mt-4 max-w-xs text-lg font-medium leading-snug text-zinc-200">
              {lead}
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.025em]"
              style={{ textWrap: 'balance' }}
            >
              <span className="text-white">{headlineWhite}</span>{' '}
              <span className="text-zinc-500">{headlineMuted}</span>
            </h2>
          </div>
        </Reveal>

        {/* Clean 3x2 hairline architectural grid — no nested card boxes or accent stripes */}
        <div className="mt-16 grid grid-cols-1 border-t border-white/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.number}
              className="border-b border-white/10 py-8 sm:pr-8 lg:px-6 lg:first:pl-0 lg:[&:nth-child(4)]:pl-0"
            >
              <span className="font-mono text-xs text-[#8B85FF] tabular-nums">
                {item.number}
              </span>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
