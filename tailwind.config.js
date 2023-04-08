/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
			crimsonpro: ['Crimson Pro', 'serif']
		},
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			lightgray: '#E5E5E5',
			gray: '#535151',
			darkgreen: '0C433B',
			pink: '#CC186E',
			opacitypink7: 'rgba(204, 24, 110, 0.07)',
			opacitypink30: 'rgba(204, 24, 110, 0.3)',
			opacitypink50: 'rgba(204, 24, 110, 0.5)'
		},
		extend: {}
	},
	plugins: []
};
