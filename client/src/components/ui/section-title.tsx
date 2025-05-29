import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
  lineColor?: string;
}

export function SectionTitle({ 
  title, 
  className,
  lineColor = "bg-primary" 
}: SectionTitleProps) {
  return (
    <div className={cn("flex items-center mb-6", className)}>
      <div className={cn("h-0.5 w-12 mr-4", lineColor)}></div>
      <span className="uppercase text-sm text-metallic font-semibold tracking-wide">{title}</span>
      <div className={cn("h-0.5 w-12 ml-4", lineColor)}></div>
    </div>
  );
}