import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("w-full h-px bg-metallic/20 my-10", className)} />
  );
}