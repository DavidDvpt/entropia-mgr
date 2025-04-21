import type { Config } from 'tailwindcss';
// tailwind.config.js
const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // adapte selon ta structure
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {},
};

export default config;
