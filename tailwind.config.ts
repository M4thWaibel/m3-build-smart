import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  // O bot da Merlin injeta um CSS com classes genéricas (.flex) depois do nosso, e com a mesma
  // especificidade ele ganhava de lg:hidden, lg:block... (ícones do celular aparecendo no
  // cabeçalho do computador). Presos ao #root, os utilitários do site sempre ganham, e os
  // elementos do bot, que ficam fora do #root, não são tocados por eles.
  important: "#root",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
      },
      // Escala da proposta no Figma (estilos de texto); o sufixo -m é a versão do celular
      fontSize: {
        display: ["88px", { lineHeight: "84px" }],
        "display-m": ["52px", { lineHeight: "50px" }],
        t1: ["64px", { lineHeight: "64px" }],
        "t1-m": ["40px", { lineHeight: "42px" }],
        t2: ["44px", { lineHeight: "46px" }],
        "t2-m": ["32px", { lineHeight: "34px" }],
        t3: ["28px", { lineHeight: "32px" }],
        numero: ["64px", { lineHeight: "64px" }],
        "numero-m": ["48px", { lineHeight: "48px" }],
        grande: ["20px", { lineHeight: "30px" }],
        texto: ["17px", { lineHeight: "26px" }],
        pequeno: ["15px", { lineHeight: "22px" }],
        rotulo: ["15px", { lineHeight: "20px" }],
        botao: ["16px", { lineHeight: "20px" }],
        cota: ["17px", { lineHeight: "20px" }],
      },
      colors: {
        noite: "hsl(var(--noite))",
        obra: "hsl(var(--obra))",
        concreto: "hsl(var(--concreto))",
        aco: "hsl(var(--aco))",
        linha: "hsl(var(--linha))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
