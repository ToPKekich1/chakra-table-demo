import type { ComponentStyleConfig } from '@chakra-ui/theme';

const ACTIVE_BG = 'rgba(93,66,255,0.08)';

export const menuStyles: ComponentStyleConfig = {
	baseStyle: {
		button: {
			transitionProperty: 'common',
			transitionDuration: 'normal',
		},
		list: {
			bg: '#fdfdfd',
			boxShadow:
				'0px 4px 4px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(67, 90, 111, 0.47)',
			color: 'inherit',
			minW: '238px',
			w: '100%',
			padding: '7px 6px 6px',
			zIndex: 1,
			borderRadius: 'lg',
			borderWidth: '1px',
			maxHeight: 200,
			overflowY: 'auto',
		},
		groupTitle: {
			mx: 4,
			my: 2,
		},
		command: {
			opacity: 0.6,
		},
		divider: {
			border: 0,
			borderBottom: '1px solid',
			borderColor: 'inherit',
			my: '0.5rem',
			opacity: 0.6,
		},
	},
	variants: {
		single: {
			item: {
				padding: '9px 14px',
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: 500,
				fontSize: '13px',
				lineHeight: '16px',
				marginBottom: '3px',
				borderRadius: '6px',
				transitionProperty: 'background',
				transitionDuration: 'ultra-fast',
				transitionTimingFunction: 'ease-in',
				_focus: {
					color: '#644ded',
					bg: ACTIVE_BG,
				},
				_active: {
					color: '#644ded',
					bg: ACTIVE_BG,
				},
				_expanded: {
					bg: '#000',
				},
				_disabled: {
					opacity: 0.4,
					cursor: 'not-allowed',
				},
			},
		},
		multi: {
			item: {
				fontFamily: 'Poppins',
				fontStyle: 'normal',
				fontWeight: 500,
				fontSize: '13px',
				lineHeight: '16px',
				w: '93%',
				borderRadius: '6px',
				transitionProperty: 'background',
				transitionDuration: 'ultra-fast',
				transitionTimingFunction: 'ease-in',
				_active: {
					color: '#644ded',
					bg: ACTIVE_BG,
				},
				_hover: {
					color: '#644ded',
					bg: 'transparent',
				},
				_expanded: {
					bg: '#000',
				},
				_disabled: {
					opacity: 0.4,
					cursor: 'not-allowed',
				},
			},
		},
	},
	defaultProps: {
		variant: 'single',
	},
};
