import { cn } from '@/lib/utils';
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return <h1 className={cn('text-5xl font-bold font-heading mb-6', className)}>{children}</h1>;
}

export function H2({ children, className }: TypographyProps) {
  return <h2 className={cn('text-4xl font-semibold font-heading mb-6', className)}>{children}</h2>;
}

export function H3({ children, className }: TypographyProps) {
  return <h3 className={cn('text-2xl font-medium font-heading mb-6', className)}>{children}</h3>;
}

export function Paragraph({ children, className }: TypographyProps) {
  return <p className={cn('text-base text-brand-contrastText', className)}>{children}</p>;
}
