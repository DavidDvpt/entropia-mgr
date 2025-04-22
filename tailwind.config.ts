import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // adapte selon ta structure
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: 'oklch(var(--card) / <alpha-value>)',
        cardForeground: 'oklch(var(--card-foreground) / <alpha-value>)',
        popover: 'oklch(var(--popover) / <alpha-value>)',
        popoverForeground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        primaryForeground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
        secondaryForeground:
          'oklch(var(--secondary-foreground) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        mutedForeground: 'oklch(var(--muted-foreground) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        accentForeground: 'oklch(var(--accent-foreground) / <alpha-value>)',
        destructive: 'oklch(var(--destructive) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        chart1: 'oklch(var(--chart-1) / <alpha-value>)',
        chart2: 'oklch(var(--chart-2) / <alpha-value>)',
        chart3: 'oklch(var(--chart-3) / <alpha-value>)',
        chart4: 'oklch(var(--chart-4) / <alpha-value>)',
        chart5: 'oklch(var(--chart-5) / <alpha-value>)',
        sidebar: 'oklch(var(--sidebar) / <alpha-value>)',
        sidebarForeground: 'oklch(var(--sidebar-foreground) / <alpha-value>)',
        sidebarPrimary: 'oklch(var(--sidebar-primary) / <alpha-value>)',
        sidebarPrimaryForeground:
          'oklch(var(--sidebar-primary-foreground) / <alpha-value>)',
        sidebarAccent: 'oklch(var(--sidebar-accent) / <alpha-value>)',
        sidebarAccentForeground:
          'oklch(var(--sidebar-accent-foreground) / <alpha-value>)',
        sidebarBorder: 'oklch(var(--sidebar-border) / <alpha-value>)',
        sidebarRing: 'oklch(var(--sidebar-ring) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [],
};

export default config;
