/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			boxShadow: {
				circle: '0px 0px 70px 100px rgba(0, 0, 0, 0.3)',
			},
		},
		screens: {
			xs: { max: '639px' },
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px' },
		},
	},
	plugins: [
		function ({ addComponents }) {
			const underlineAnimation = {
				position: 'relative',
				display: 'inline-block',
				'&::before, &::after': {
					content: '""',
					position: 'absolute',
					backgroundColor: 'white',
					transition: 'transform 0.5s ease-out',
				},
				'&.vertical::before': {
					height: '100%',
					width: '2px',
					left: '0',
					top: '0',
					transform: 'scaleY(0)',
					transformOrigin: 'bottom',
				},
				'&.vertical:hover::before': {
					transform: 'scaleY(1)',
					transformOrigin: 'top',
				},
				'&:not(.vertical)::after': {
					width: '100%',
					height: '2px',
					bottom: '0',
					left: '0',
					transform: 'scaleX(0)',
					transformOrigin: 'bottom right',
				},
				'&:not(.vertical):hover::after': {
					transform: 'scaleX(1)',
					transformOrigin: 'bottom left',
				},
			};

			addComponents({
				'.underline-animation': underlineAnimation,
			});
		},
	],
};
