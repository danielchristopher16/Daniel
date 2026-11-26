import { ArrowRight } from 'lucide-react';

interface ActionArrowBadgeProps {
  size?: 'sm' | 'md';
  className?: string;
}

export function ActionArrowBadge({ size = 'md', className = '' }: ActionArrowBadgeProps) {
  const dimensions = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';

  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${dimensions} shrink-0 items-center justify-center rounded-full bg-[#8B85FF] text-black transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:bg-[#A39EFF] ${className}`}
    >
      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
    </span>
  );
}
