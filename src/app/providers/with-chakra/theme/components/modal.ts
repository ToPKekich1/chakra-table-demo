import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const modalStyles: ComponentStyleConfig = {
	baseStyle: {
		overlay: {
			bg: 'rgba(26, 26, 37, 0.4)',
		},
		closeButton: {
			color: '#484964',
			_focus: { outline: 'none' },
			_hover: {
				backgroundColor: 'rgba(100, 77, 237, 0.08)',
				color: '#644DED',
			},
		},
		dialogContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		dialog: {
			background: '#FFFFFF',
			borderRadius: '16px',
		},
		header: {
			padding: '22px 30px 17px',
			fontFamily: 'Poppins',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '18px',
			lineHeight: '135%',
			color: '#1A1A25',
		},
		body: {
			padding: '4px 30px 21px',
		},
	},
	variants: {
		stepper: {
			header: {
				padding: 0,
			},
			body: {
				padding: 0,
			},
			footer: {
				padding: 0,
			},
		},
		fullscreen: () => ({
			overlay: {
				bg: 'rgba(26, 26, 37, 0.95)',
			},
			dialogContainer: {
				w: 'full',
				h: 'full',
				bg: 'none',
			},
			dialog: {
				pos: 'relative',
				p: 0,
				m: 0,
				w: 'full',
				h: 'full',
				minW: '100vw',
				minH: '100vh',
				maxW: '100vw',
				maxH: '100vh',
				background: 'none',
			},
			header: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: '#FFFFFF',
			},
			closeButton: {
				color: '#FFFFFF',
			},
			footer: {
				w: 'full',
				pos: 'absolute',
				left: 0,
				bottom: 0,
				background: 'rgba(26, 26, 37, 0.4)',
				backdropFilter: 'blur(24px)',
				color: '#FFFFFF',
			},
		}),
	},
};
