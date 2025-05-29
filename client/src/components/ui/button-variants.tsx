import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function PrimaryButton({ className, children, ...props }: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "bg-[#E5E5E5] text-black font-body font-semibold px-6 py-3 rounded-md hover:scale-105 transition",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ className, children, ...props }: CustomButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border border-white text-white hover:bg-white hover:text-black transition-all px-6 py-3 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}