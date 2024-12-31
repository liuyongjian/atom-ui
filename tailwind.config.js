/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./components/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: {
					10: '#93c5fd', // 浅蓝
					20: '#60a5fa', // 蓝色
					40: '#2563eb', // 深蓝
				},
				secondary: {
					10: '#bef264', // 浅绿
					20: '#a3e635', // 绿色
					40: '#65a30d', // 深绿
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			}
		}
	},
	safelist: [
		{
			pattern: /^(gap|p|pt|pr|pb|pl|px|py)-\d+$/,
		},
	],
	plugins: [require("tailwindcss-animate")],
}
