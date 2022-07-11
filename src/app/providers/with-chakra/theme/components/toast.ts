import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const toastStyles: ComponentStyleConfig = {
	baseStyle: {
		container: {
			p: '15px 19px',
		},
		title: {
			fontWeight: '500',
			fontSize: '16px',
			lineHeight: '24px',
		},
		description: {
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '24px',
		},
		icon: {
			mt: '2px',
			w: '18px',
			h: '18px',
		},
	},
	variants: {
		success: {
			container: {
				bg: '#019822',
				color: '#FFFFFF',
			},
		},
		info: {
			container: {
				bg: '#484964',
				color: '#FFFFFF',
			},
		},
		error: {
			container: {
				bg: '#ED0000',
				color: '#FFFFFF',
			},
		},
	},
};
