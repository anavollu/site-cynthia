/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '375px',
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
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			lightgray: '#E5E5E5',
			gray: '#535151',
			darkgreen: '#0C433B',
			pink: {
				default: '#CC186E',
				pastel: '#E3D7DD',
				7: '#FBEFF5',
				30: '#F0BAD3',
				50: '#DB5E9A',
				100: '#9A172B'
			}
		},
		letterSpacing: {
			wide: '.02em',
			wide5: '.05em',
			wider: '.1em'
		},
		extend: {}
	},
	plugins: []
};
