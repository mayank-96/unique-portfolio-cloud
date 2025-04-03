import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'mono': ['Space Mono', 'monospace'],
				'sora': ['Sora', 'sans-serif'],
				'anton': ['Anton', 'sans-serif'],
				'sans': ['DM Sans', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom neon colors
				neon: {
					purple: '#8B5CF6',
					blue: '#0EA5E9',
					pink: '#D946EF',
					orange: '#F97316',
					green: '#10B981',
					yellow: '#FBBF24',
				},
				futuristic: {
					dark: '#080B13',
					card: '#0F1524',
					accent: '#1A1E2E',
					highlight: '#252A3F',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYweiIvPjwvZz48L2c+PC9zdmc+')",
				'subtle-dots': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')",
				'glow-top': 'radial-gradient(circle at top center, rgba(139, 92, 246, 0.15), transparent 70%)',
				'glow-bottom': 'radial-gradient(circle at bottom center, rgba(14, 165, 233, 0.15), transparent 70%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neon-purple': '0 0 10px rgba(139, 92, 246, 0.7)',
				'neon-blue': '0 0 10px rgba(14, 165, 233, 0.7)',
				'neon-pink': '0 0 10px rgba(217, 70, 239, 0.7)',
				'3d': '0 20px 80px -20px rgba(0, 0, 0, 0.7)',
				'shine': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.7))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.9))' 
					}
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(2deg)' },
					'75%': { transform: 'translateY(10px) rotate(-2deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.7' },
					'50%': { opacity: '1' }
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'tracking-in': {
					'0%': { letterSpacing: '-0.5em', opacity: '0' },
					'40%': { opacity: '0.6' },
					'100%': { letterSpacing: 'normal', opacity: '1' }
				},
				'blur-in': {
					'0%': { filter: 'blur(12px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'marquee': 'marquee 25s linear infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
				'tracking-in': 'tracking-in 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
				'blur-in': 'blur-in 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
