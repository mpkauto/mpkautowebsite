import { buttonStyles, cardStyles, textStyles, formStyles, animationClasses } from './styles';

// Button component configuration
export const buttonConfig = {
  variants: {
    primary: `${buttonStyles.base} ${buttonStyles.primary}`,
    secondary: `${buttonStyles.base} ${buttonStyles.secondary}`,
    accent: `${buttonStyles.base} ${buttonStyles.accent}`,
    outline: `${buttonStyles.base} ${buttonStyles.outline}`,
    ghost: `${buttonStyles.base} ${buttonStyles.ghost}`,
    link: `${buttonStyles.base} ${buttonStyles.link}`,
    icon: `${buttonStyles.base} ${buttonStyles.icon}`
  },
  sizes: {
    sm: buttonStyles.size.sm,
    md: buttonStyles.size.md,
    lg: buttonStyles.size.lg
  }
};

// Card component configuration
export const cardConfig = {
  variants: {
    default: `${cardStyles.base} ${cardStyles.light}`,
    dark: `${cardStyles.base} ${cardStyles.dark}`,
    interactive: `${cardStyles.base} ${cardStyles.interactive}`,
    elevated: `${cardStyles.base} ${cardStyles.elevated}`,
    flat: `${cardStyles.base} ${cardStyles.flat}`,
    bordered: `${cardStyles.base} ${cardStyles.bordered}`,
    glass: `${cardStyles.base} ${cardStyles.glass}`,
    gradient: `${cardStyles.base} ${cardStyles.gradient}`,
    darkGradient: `${cardStyles.base} ${cardStyles.darkGradient}`
  }
};

// Text component configuration
export const textConfig = {
  variants: {
    h1: textStyles.h1,
    h2: textStyles.h2,
    h3: textStyles.h3,
    h4: textStyles.h4,
    h5: textStyles.h5,
    h6: textStyles.h6,
    body: textStyles.body,
    small: textStyles.small,
    caption: textStyles.caption,
    muted: textStyles.muted,
    primary: textStyles.primary,
    accent: textStyles.accent,
    white: textStyles.white,
    dark: textStyles.dark
  }
};

// Form component configuration
export const formConfig = {
  input: formStyles.input,
  label: formStyles.label,
  error: formStyles.error,
  help: formStyles.help,
  group: formStyles.group,
  inline: formStyles.inline
};

// Animation component configuration
export const animationConfig = {
  variants: {
    fadeIn: animationClasses.fadeIn,
    fadeOut: animationClasses.fadeOut,
    slideIn: animationClasses.slideIn,
    slideOut: animationClasses.slideOut,
    hover: animationClasses.hover,
    lift: animationClasses.lift,
    glow: animationClasses.glow
  }
};

// Navigation component configuration
export const navigationConfig = {
  nav: "flex items-center space-x-4",
  navItem: "text-gray-600 hover:text-primary transition-colors duration-300",
  navItemActive: "text-primary font-medium",
  mobileNav: "fixed inset-0 bg-white dark:bg-surface z-50",
  mobileNavItem: "block py-3 px-4 text-lg hover:bg-gray-50 dark:hover:bg-surface-light",
  mobileNavItemActive: "bg-gray-50 dark:bg-surface-light text-primary font-medium"
};

// Layout component configuration
export const layoutConfig = {
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-16 md:py-24",
  grid: "grid gap-6 md:gap-8",
  flex: "flex items-center",
  stack: "flex flex-col space-y-4",
  center: "flex items-center justify-center",
  between: "flex items-center justify-between"
};

// Modal component configuration
export const modalConfig = {
  overlay: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50",
  content: "fixed inset-0 z-50 flex items-center justify-center p-4",
  panel: "w-full max-w-lg rounded-2xl bg-white dark:bg-surface shadow-xl",
  header: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10",
  body: "p-6",
  footer: "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 dark:border-white/10"
};

// Alert component configuration
export const alertConfig = {
  base: "rounded-lg p-4",
  variants: {
    info: "bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
    success: "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200",
    warning: "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200",
    error: "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
  },
  icon: "mr-3 h-5 w-5",
  title: "font-medium",
  message: "mt-2 text-sm"
};

// Badge component configuration
export const badgeConfig = {
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  variants: {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error"
  }
};

// Avatar component configuration
export const avatarConfig = {
  base: "inline-block rounded-full overflow-hidden",
  sizes: {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  },
  group: "flex -space-x-4",
  groupItem: "ring-2 ring-white dark:ring-surface"
};

// Tooltip component configuration
export const tooltipConfig = {
  base: "absolute z-50 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm",
  arrow: "absolute w-2 h-2 bg-gray-900 transform rotate-45",
  positions: {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2"
  }
}; 