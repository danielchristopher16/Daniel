import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function ProcessSection() {
  const { kicker, title, steps } = SITE_CONFIG.processSection;

  return (
    <section
      id="processo"
      className="border-t border-white/8 bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wide text-zinc-400">
            {kicker}
          </p>
          <h2
            className="mt-3 text-[clamp(1.85rem,3.6vw,3rem)] font-medium leading-[1.15] tracking-[-0.025em] text-white"
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delayMs={index * 60}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0A0D] p-7"
            >
              <div>
                <span className="font-mono text-sm font-medium text-[#8B85FF] tabular-nums">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
