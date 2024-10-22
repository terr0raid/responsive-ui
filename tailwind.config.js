/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				beige: '#FDF7F1',
				default: '#FFFBEB',
				amber: {
					900: '#78350F',
					400: '#FBBF24',
					200: '#FDE68A',
					100: '#FEF3C7',
				},
				'blue-gray': '#0F172A',
			},

			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			boxShadow: {
				'light-xxl':
					'0 0 15px 0 rgba(255, 255, 255, 0.07), 0 25px 50px -12px rgba(255, 255, 255, 0.25)',
				'dark-xxl':
					'0 0 15px 0 rgba(0, 0, 0, 0.07), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'dark-xl':
					'0 0 10px 0 rgba(0, 0, 0, 0.07), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
				'dark-l':
					'0 0 6px 0 rgba(0, 0, 0, 0.07), 0 10px 15px -3px rgba(0, 0, 0, 0.10)',
				'dark-s':
					'0px 0px 2px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
			},
			fontSize: {
				'button-m': [
					'16px',
					{
						lineHeight: '24px',
						letterSpacing: '0.5px',
						fontWeight: '500',
					},
				],
				'button-l': [
					'20px',
					{
						lineHeight: '24px',
						letterSpacing: '0.5px',
						fontWeight: '500',
					},
				],
				'button-xl': [
					'24px',
					{
						lineHeight: '24px',
						letterSpacing: '0.5px',
						fontWeight: '700',
					},
				],
				'heading-6': [
					'24px',
					{
						lineHeight: '26.4px',
						fontWeight: '700',
					},
				],

				'heading-5': [
					'32px',
					{
						lineHeight: '35.2px',
						fontWeight: '500',
					},
				],
				'heading-4': [
					'48px',
					{
						lineHeight: '52.8px',
						fontWeight: '500',
					},
				],
				'heading-3': [
					'56px',
					{
						lineHeight: '61.6px',
						fontWeight: '500',
					},
				],
				'heading-2': [
					'56px',
					{
						lineHeight: '61.6px',
						fontWeight: '800',
					},
				],
				'heading-1': [
					'72px',
					{
						lineHeight: '79.2px',
						fontWeight: '900',
					},
				],
				'subtitle-xl': [
					'20px',
					{
						lineHeight: '22px',
						fontWeight: '500',
					},
				],
				'subtitle-l': [
					'16px',
					{
						lineHeight: '19.2px',
						fontWeight: '500',
					},
				],
				'body-l': [
					'18px',
					{
						lineHeight: '28.8px',
						fontWeight: '400',
					},
				],
				'body-xl': [
					'20px',
					{
						lineHeight: '36px',
						fontWeight: '400',
					},
				],
				'body-xxl': [
					'24px',
					{
						lineHeight: '38.4px',
						fontWeight: '400',
					},
				],

				'body-m': [
					'16px',
					{
						lineHeight: '22.4px',
						fontWeight: '400',
					},
				],
			},

			spacing: {
				1: '8px',
				2: '16px',
				3: '24px',
				4: '32px',
				5: '40px',
				6: '48px',
				7: '56px',
				8: '64px',
				9: '72px',
				10: '80px',
				11: '88px',
				12: '96px',
				13: '104px',
				14: '112px',
				15: '120px',
				20: '160px',
			},
			borderRadius: {
				custom: '8px',
			},
			borderWidth: {
				1: '1px',
				2: '2px',
				3: '3px',
				4: '4px',
			},
		},
	},
	plugins: [],
}
