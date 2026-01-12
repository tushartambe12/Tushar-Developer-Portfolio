import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			animation: {
				marquee: "marquee 20s linear infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"music-bar": "music-bar 0.5s ease-in-out infinite",
				"spin-slow": "spin-slow 4s linear infinite",
				"glow-pulse": "glow-pulse 2s ease-in-out infinite",
				"dot-pulse": "dot-pulse 2s ease-in-out infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"pulse-glow": {
					"0%, 100%": {
						boxShadow: "0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 15px #22c55e",
					},
					"50%": {
						boxShadow: "0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e",
					},
				},
				"music-bar": {
					"0%, 100%": { height: "4px" },
					"50%": { height: "16px" },
				},
				"spin-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				"glow-pulse": {
					"0%, 100%": {
						textShadow:
							"0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)",
					},
					"50%": {
						textShadow:
							"0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.5)",
					},
				},
				"dot-pulse": {
					"0%, 100%": { opacity: "1", transform: "scale(1)" },
					"50%": { opacity: "0.5", transform: "scale(1.5)" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
