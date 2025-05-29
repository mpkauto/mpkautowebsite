// Card styles
export const cardStyles = {
  base: 'bg-white rounded-2xl shadow-card transition-all duration-300',
  hover: 'hover:shadow-card-hover hover:-translate-y-1',
  dark: 'bg-surface border border-white/5',
  light: 'bg-white border border-gray-200',
  interactive:
    'cursor-pointer transform transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
  elevated: 'shadow-lg hover:shadow-xl',
  flat: 'shadow-none hover:shadow-sm',
  bordered: 'border border-gray-200 hover:border-primary/20',
  glass: 'bg-white/80 backdrop-blur-sm border border-white/20',
  gradient: 'bg-gradient-to-br from-white to-gray-50',
  darkGradient: 'bg-gradient-to-br from-surface to-surface-dark',
};

// Button styles
export const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary/50',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary/50',
  accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent/50',
  outline: 'border-2 border-current hover:bg-gray-50 focus:ring-gray-500/50',
  ghost: 'hover:bg-gray-100 focus:ring-gray-500/50',
  link: 'text-primary hover:text-primary-dark underline-offset-4 hover:underline',
  icon: 'p-2 rounded-full hover:bg-gray-100 focus:ring-gray-500/50',
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
};

// Text styles
export const textStyles = {
  h1: 'text-4xl md:text-5xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
  h5: 'text-lg md:text-xl font-medium',
  h6: 'text-base md:text-lg font-medium',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-normal',
  caption: 'text-xs leading-normal',
  muted: 'text-gray-600 dark:text-gray-300',
  primary: 'text-primary',
  accent: 'text-accent',
  white: 'text-white',
  dark: 'text-gray-900 dark:text-white',
};

// Section styles
export const sectionStyles = {
  base: 'py-16 md:py-24',
  narrow: 'py-12 md:py-16',
  wide: 'py-20 md:py-32',
  dark: 'bg-surface text-white',
  light: 'bg-white text-gray-900',
  gradient: 'bg-gradient-to-br from-white to-gray-50',
  darkGradient: 'bg-gradient-to-br from-surface to-surface-dark',
  bordered: 'border-t border-b border-gray-200',
  spaced: 'space-y-8 md:space-y-12',
  container: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
};

// Form styles
export const formStyles = {
  input:
    'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300',
  label: 'block text-sm font-medium text-gray-700 mb-1',
  error: 'text-error text-sm mt-1',
  help: 'text-gray-500 text-sm mt-1',
  group: 'space-y-1',
  inline: 'flex items-center space-x-2',
};

// Animation classes
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  fadeOut: 'animate-fade-out',
  slideIn: 'animate-slide-in',
  slideOut: 'animate-slide-out',
  hover: 'transition-transform duration-300 hover:scale-105',
  lift: 'transition-transform duration-300 hover:-translate-y-1',
  glow: 'transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20',
};

// Layout styles
export const layoutStyles = {
  grid: {
    base: 'grid gap-6',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    auto: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  },
  flex: {
    base: 'flex',
    col: 'flex flex-col',
    row: 'flex flex-row',
    wrap: 'flex flex-wrap',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
    end: 'flex items-center justify-end',
  },
  container: {
    base: 'container mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
};

// Spacing utilities
export const spacing = {
  section: {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  },
  container: {
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12',
  },
  gap: {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
};
