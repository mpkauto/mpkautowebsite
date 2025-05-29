import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomCardProps {
  className?: string;
  children: React.ReactNode;
  withHoverEffect?: boolean;
}

export function CustomCard({ 
  className, 
  children, 
  withHoverEffect = true,
  ...props 
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        "bg-gray-light rounded-xl",
        withHoverEffect && "hover:scale-105 hover:ring-1 hover:ring-[#9B9B9B]/30 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

// Update StyledCard as well
export function StyledCardVariant({
  className, 
  children,
  ...props 
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        "bg-graphite border border-metallic/20 rounded-xl p-6 hover:scale-105 hover:ring-1 hover:ring-[#9B9B9B]/30 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function CustomCardHeader({ className, children, ...props }: CustomCardProps) {
  return (
    <CardHeader className={cn("px-6 pt-6", className)} {...props}>
      {children}
    </CardHeader>
  );
}

export function CustomCardContent({ className, children, ...props }: CustomCardProps) {
  return (
    <CardContent className={cn("px-6 py-4", className)} {...props}>
      {children}
    </CardContent>
  );
}

export function CustomCardFooter({ className, children, ...props }: CustomCardProps) {
  return (
    <CardFooter className={cn("px-6 pb-6 pt-2", className)} {...props}>
      {children}
    </CardFooter>
  );
}

// New consistent card component with the specified styling
interface ConsistentCardProps {
  className?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function ConsistentCard({
  className,
  title,
  description,
  children,
  footer,
  ...props
}: ConsistentCardProps) {
  return (
    <Card
      className={cn(
        "bg-surface p-6 rounded-xl shadow-md hover:scale-105 hover:ring-1 hover:ring-[#9B9B9B]/30 transition-all",
        className
      )}
      {...props}
    >
      {title && (
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
      )}
      {description && (
        <CardDescription className="text-sm text-textMuted mt-2">
          {description}
        </CardDescription>
      )}
      {children && <div className="mt-4">{children}</div>}
      {footer && <div className="mt-6">{footer}</div>}
    </Card>
  );
}

// New styled card component with the specified styling
export function StyledCard({ 
  className, 
  children,
  ...props 
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        "bg-graphite border border-metallic/20 rounded-xl p-6 hover:ring-1 hover:ring-metallic/30 transition",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export function StyledCardTitle({ className, children, ...props }: CustomCardProps) {
  return (
    <CardTitle className={cn("text-platinum font-heading text-xl", className)} {...props}>
      {children}
    </CardTitle>
  );
}

export function StyledCardText({ className, children, ...props }: CustomCardProps) {
  return (
    <div className={cn("text-metallic font-body text-sm leading-relaxed", className)} {...props}>
      {children}
    </div>
  );
}