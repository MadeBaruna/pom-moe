/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Rubik', 'sans-serif'],
			body: ['Rubik', 'sans-serif'],
			sans: ['Rubik', 'sans-serif'],
			monospace: ['monospace']
		},
		extend: {
			colors: {
				dark: '#0b0d19',
				5: '#fbcd74',
				4: '#b087ff',
				3: '#4f78be'
			},
			backgroundImage: (theme) => ({
				space: `linear-gradient(90deg, ${theme('colors.blue.300')}, ${theme(
					'colors.purple.300'
				)}, ${theme('colors.yellow.100')})`
			})
		}
	},
	plugins: []
};
