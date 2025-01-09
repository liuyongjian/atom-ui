/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./components/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
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
			pattern: /^w-\[\d+(px|%)\]$/, // 暂时不支持这种 'w-[..]' 匹配
		},
	],
	plugins: [require("tailwindcss-animate")],
}
