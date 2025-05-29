import { cn } from '@/lib/utils';

interface SectionDividerProps {
  className?: string;
  patternPosition?: 'left' | 'right' | 'center';
}

export function SectionDivider({ className, patternPosition = 'right' }: SectionDividerProps) {
  return (
    <div className={cn('h-24 relative', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 w-full h-full"></div>
      <div
        className={cn(
          "absolute w-64 h-64 bg-[url('/images/airflow-pattern.svg')] opacity-10 blur-md",
          patternPosition === 'left' && 'left-0 -translate-x-1/4',
          patternPosition === 'right' && 'right-0 translate-x-1/4',
          patternPosition === 'center' && 'left-1/2 -translate-x-1/2'
        )}
      ></div>
    </div>
  );
}
