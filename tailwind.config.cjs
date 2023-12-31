/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#18181a",
				"secondary": "#22b573",
			}
		},
		screens: {
			"sm": {"max": "900px"},
			"lg": "1000px"
		},
	},
	plugins: [],
}
