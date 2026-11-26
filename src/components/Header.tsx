import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ActionArrowBadge } from './ActionArrowBadge';

interface HeaderProps {
  onOpenBriefing: (preselectedService?: string) => void;
}

const NAV_ITEMS = [
  { label: 'Projetos', href: '#projetos', external: false },
  { label: 'Serviços', href: '#servicos', external: false },
  {
    label: 'Contato',
    href: SITE_CONFIG.contact.whatsappUrl ?? '#contato',
    external: Boolean(SITE_CONFIG.contact.whatsappUrl),
  },
] as const;

export function Header({ onOpenBriefing }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#topo"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-base font-semibold tracking-tight text-white transition-opacity duration-200 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="none"
            className="h-6 w-6 shrink-0"
          >
            <rect width="32" height="32" rx="8" fill="#121216" stroke="rgba(255,255,255,0.16)" />
            <path
              d="M9.5 10.5H14.8C18.5 10.5 21.5 13 21.5 16C21.5 19 18.5 21.5 14.8 21.5H9.5V10.5Z"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <circle cx="23.5" cy="10.5" r="2.2" fill="#8B85FF" />
          </svg>
          <span>{SITE_CONFIG.brand.name}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenBriefing()}
            className="group hidden cursor-pointer items-center gap-3 whitespace-nowrap shrink-0 rounded-full py-1 pl-3 pr-1 text-sm font-medium text-white transition-colors duration-200 hover:text-[#B4B0FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B85FF] md:inline-flex"
          >
            <span>Solicitar orçamento</span>
            <ActionArrowBadge size="sm" />
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B85FF] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-white/10 bg-black/95 px-5 pb-7 pt-5 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={handleMobileLinkClick}
                className="flex min-h-[44px] items-center justify-between border-b border-white/8 py-3 text-base font-medium text-zinc-200 transition-colors hover:text-white"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-zinc-500">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBriefing();
              }}
              className="group flex min-h-[48px] w-full cursor-pointer items-center justify-between rounded-full border border-white/15 bg-[#121217] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#8B85FF]/60"
            >
              <span>Solicitar orçamento</span>
              <ActionArrowBadge size="sm" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
