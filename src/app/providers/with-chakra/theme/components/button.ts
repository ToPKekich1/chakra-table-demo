import type { ComponentStyleConfig } from '@chakra-ui/theme';

const HOVER_BG = 'rgba(100, 77, 237, 0.08)';

export const buttonStyles: ComponentStyleConfig = {
	baseStyle: {
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: 500,
		borderRadius: '8px',
		flexShrink: '0',
		_disabled: {
			opacity: 0.7,
			cursor: 'not-allowed',
		},
		_hover: {
			_disabled: {
				color: '#644ded',
				opacity: 0.7,
				cursor: 'not-allowed',
			},
		},
		_focus: {
			boxShadow: 'none',
		},
	},
	sizes: {
		xs: {
			padding: '5px 8px',
			fontSize: '13px',
			lineHeight: '16px',
		},
		sm: {
			padding: '10px 8px',
			fontSize: '13px',
			lineHeight: '16px',
		},
		md: {
			padding: '12px',
			fontSize: '14px',
			lineHeight: '16px',
		},
		lg: {
			padding: '12px 16px',
			fontSize: '14px',
			lineHeight: '20px',
		},
		circle: {
			borderRadius: '50%',
			w: '25px',
			h: '25px',
		},
		square: { w: '32px', h: '32px' },
	},
	variants: {
		primary: {
			bg: '#644ded',
			color: 'white',
			_hover: {
				bg: '#8960ff',
			},
		},
		secondary: {
			bg: 'transparent',
			color: '#484964',
			_hover: {
				color: '#644ded',
				bg: HOVER_BG,
			},
		},
		select: {
			bg: '#f3f3f8',
			color: '#1A202C',
			textAlign: 'left',
			fontWeight: 'normal',
		},
		dark: {
			color: '#FFFFFF',
			bg: 'transparent',
			_hover: {
				bg: HOVER_BG,
			},
		},
		light: {
			color: '#242533',
			bg: '#EEEEF2',
			_hover: {
				bg: HOVER_BG,
			},
		},
		ghost: {
			_hover: {
				backgroundColor: HOVER_BG,
				color: '#644DED',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'primary',
	},
};
