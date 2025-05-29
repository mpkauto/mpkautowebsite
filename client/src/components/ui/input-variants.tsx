import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function CustomInput({ className, ...props }: CustomInputProps) {
  return (
    <Input
      className={cn(
        'bg-gray-dark border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary rounded-md',
        className
      )}
      {...props}
    />
  );
}

export function CustomTextarea({ className, ...props }: CustomTextareaProps) {
  return (
    <Textarea
      className={cn(
        'bg-gray-dark border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary rounded-md',
        className
      )}
      {...props}
    />
  );
}
