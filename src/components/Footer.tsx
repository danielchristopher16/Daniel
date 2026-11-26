import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface FooterProps {
  onOpenBriefing: (preselectedService?: string) => void;
}

export function Footer({ onOpenBriefing }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-10">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <a
              href="#topo"
              className="inline-block text-xl font-semibold tracking-tight text-white"
            >
              {SITE_CONFIG.brand.name}
            </a>
            <p className="mt-3 max-w-sm text-base text-zinc-300">
              {SITE_CONFIG.brand.footerTagline}
            </p>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              {SITE_CONFIG.brand.positioning}
            </p>
          </div>

          {/* Navigation Columns matching Resize footer */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <nav aria-label="Navegação do rodapé">
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Navegação
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>
                  <a href="#topo" className="transition-colors hover:text-white">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="transition-colors hover:text-white">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="transition-colors hover:text-white">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="transition-colors hover:text-white">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#processo" className="transition-colors hover:text-white">
                    Processo
                  </a>
                </li>
                <li>
                  <a href="#contato" className="transition-colors hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Serviços
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {SITE_CONFIG.servicesSection.items.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onOpenBriefing(service.title)}
                      className="cursor-pointer text-left transition-colors hover:text-white"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-500">
                Social
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>
                  <a
                    href={SITE_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B4B0FF]"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                  </a>
                </li>
                {SITE_CONFIG.contact.whatsappUrl && (
                  <li>
                    <a
                      href={SITE_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-[#B4B0FF]"
                    >
                      <span>WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                    </a>
                  </li>
                )}
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenBriefing()}
                    className="cursor-pointer text-left transition-colors hover:text-[#B4B0FF]"
                  >
                    Solicitar orçamento
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {SITE_CONFIG.brand.name}. Todos os direitos reservados.
          </p>
          <a
            href="#topo"
            className="transition-colors hover:text-zinc-300"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
