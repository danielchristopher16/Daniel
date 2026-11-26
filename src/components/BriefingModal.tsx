import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import {
  buildInstagramBriefingMessage,
  validateBriefingInput,
  type BriefingInput,
} from '../utils/briefing';
import { ActionArrowBadge } from './ActionArrowBadge';

interface BriefingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export function BriefingModal({
  isOpen,
  initialService,
  onClose,
}: BriefingModalProps) {
  const defaultService =
    initialService || SITE_CONFIG.servicesSection.items[0].title;

  const [formState, setFormState] = useState<BriefingInput>({
    name: '',
    company: '',
    service: defaultService,
    goal: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof BriefingInput, string>>
  >({});
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormState((prev) => ({
        ...prev,
        service: initialService || prev.service || defaultService,
      }));
      setErrors({});
      setGeneratedMessage(null);
      setCopied(false);
    }
  }, [isOpen, initialService, defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validation = validateBriefingInput(formState);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setGeneratedMessage(buildInstagramBriefingMessage(formState));
  };

  const handleCopy = async () => {
    if (!generatedMessage) return;
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/12 bg-[#0B0B0E] p-6 text-white sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#B4B0FF]">
              Solicitar orçamento
            </p>
            <h3
              id="briefing-modal-title"
              className="mt-1.5 text-2xl font-medium tracking-tight text-white"
            >
              Conte sobre o seu projeto
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Preencha os dados abaixo para gerar um resumo pronto e enviar
              diretamente pelo Instagram {SITE_CONFIG.contact.instagramHandle}.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar formulário de orçamento"
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B85FF]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!generatedMessage ? (
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="briefing-name"
                className="block text-xs font-medium text-zinc-300"
              >
                Seu nome
              </label>
              <input
                id="briefing-name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Ex.: Mariana Silva"
                className="mt-2 w-full rounded-xl border border-white/12 bg-black px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#8B85FF] focus:outline-none"
              />
              {errors.name && (
                <p role="alert" className="mt-1.5 text-xs text-rose-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="briefing-company"
                className="block text-xs font-medium text-zinc-300"
              >
                Empresa ou segmento
              </label>
              <input
                id="briefing-company"
                type="text"
                value={formState.company}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, company: e.target.value }))
                }
                placeholder="Ex.: Clínica Lumina"
                className="mt-2 w-full rounded-xl border border-white/12 bg-black px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#8B85FF] focus:outline-none"
              />
              {errors.company && (
                <p role="alert" className="mt-1.5 text-xs text-rose-400">
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="briefing-service"
                className="block text-xs font-medium text-zinc-300"
              >
                Serviço desejado
              </label>
              <select
                id="briefing-service"
                value={formState.service}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, service: e.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-white/12 bg-black px-4 py-3 text-sm text-white transition-colors focus:border-[#8B85FF] focus:outline-none"
              >
                {SITE_CONFIG.servicesSection.items.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Clínicas e estética">
                  Projeto para Clínicas e estética
                </option>
                <option value="Empresas e serviços">
                  Projeto para Empresas e serviços
                </option>
                <option value="Negócios locais">
                  Projeto para Negócios locais
                </option>
                <option value="Marcas e profissionais">
                  Projeto para Marcas e profissionais
                </option>
              </select>
              {errors.service && (
                <p role="alert" className="mt-1.5 text-xs text-rose-400">
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="briefing-goal"
                className="block text-xs font-medium text-zinc-300"
              >
                Objetivo do projeto
              </label>
              <textarea
                id="briefing-goal"
                rows={3}
                value={formState.goal}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, goal: e.target.value }))
                }
                placeholder="Ex.: Queremos um site institucional moderno para apresentar nossos serviços e gerar pedidos de orçamento."
                className="mt-2 w-full rounded-xl border border-white/12 bg-black px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#8B85FF] focus:outline-none"
              />
              {errors.goal && (
                <p role="alert" className="mt-1.5 text-xs text-rose-400">
                  {errors.goal}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
              >
                <span>Ir direto para o Instagram</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="submit"
                className="group inline-flex min-h-[46px] cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white transition-colors hover:border-[#8B85FF]/60 hover:bg-white/[0.1]"
              >
                <span>Preparar mensagem</span>
                <ActionArrowBadge size="sm" />
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-white/10 bg-black p-4">
              <p className="text-xs font-medium text-zinc-400">
                Resumo pronto para envio:
              </p>
              <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-zinc-200">
                {generatedMessage}
              </pre>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-xs font-medium text-white transition-colors hover:border-white/35"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#8B85FF]" />
                    <span>Mensagem copiada</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>Copiar mensagem</span>
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center gap-3">
                {SITE_CONFIG.contact.whatsappUrl && (
                  <a
                    href={SITE_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[#8B85FF] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#A39EFF]"
                  >
                    <span>Enviar pelo WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-[46px] items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    SITE_CONFIG.contact.whatsappUrl
                      ? 'border border-white/15 text-white hover:border-[#8B85FF]/60'
                      : 'bg-[#8B85FF] text-black hover:bg-[#A39EFF]'
                  }`}
                >
                  <span>Enviar pelo Instagram</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setGeneratedMessage(null)}
                className="cursor-pointer text-xs font-medium text-zinc-400 hover:text-white"
              >
                ← Editar informações
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
