import { cn } from "@/lib/utils";

interface BrandPatternProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
  blur?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  rotate?: number;
  className?: string;
}

export function BrandPattern({
  position,
  size = "lg",
  opacity = 5,
  blur = "2xl",
  rotate = 0,
  className
}: BrandPatternProps) {
  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[40rem] h-[40rem]"
  };
  
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };
  
  return (
    <div 
      className={cn(
        "absolute bg-[url('/images/airflow-pattern.svg')] z-[-1] pointer-events-none",
        sizeClasses[size],
        positionClasses[position],
        `opacity-${opacity}`,
        `blur-${blur}`,
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}