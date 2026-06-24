import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // IntelliForge AI OS design tokens
        'if-dark':    '#0f172a',
        'if-navy':    '#1e1b4b',
        'if-indigo':  '#4f46e5',
        'if-violet':  '#6d28d9',
        'if-purple':  '#7c3aed',
        'if-cyan':    '#06b6d4',
        'if-cyan-hi': '#22d3ee',
        'if-green':   '#10b981',
        'if-orange':  '#f97316',
        'if-slate':   '#1e293b',
        'if-border':  '#1e3a5f',
        'if-muted':   '#64748b',
        'if-text':    '#e2e8f0',
        'if-text-dim':'#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'if-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #4f46e5 75%, #06b6d4 100%)',
        'if-glow':     'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,70,229,0.3), transparent)',
        'card-glow':   'radial-gradient(ellipse at top, rgba(79,70,229,0.15), transparent 60%)',
      },
      animation: {
        'trace': 'trace 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        trace: {
          '0%':   { opacity: '0', transform: 'translateY(-4px)' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(4px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
