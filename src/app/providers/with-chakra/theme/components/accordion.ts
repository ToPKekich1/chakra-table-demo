import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const accordionStyles: ComponentStyleConfig = {
	baseStyle: {
		icon: {
			borderRadius: 9999,
			_hover: {
				bg: 'blackAlpha.100',
			},
		},
		button: {
			padding: '15px 22px',
			_hover: {
				bg: 'initial',
			},
			_focus: {
				boxShadow: 'none',
			},
		},
		panel: {
			padding: '0 22px',
			px: 0,
			py: 2,
		},
	},
};
