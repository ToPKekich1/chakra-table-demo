import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const inputStyles: ComponentStyleConfig = {
	baseStyle: {},
	sizes: {
		md: {
			field: {
				height: '48px',
				padding: '12px 16px',
			},
		},
		sm: {
			field: {
				height: '32px',
				padding: '7px 12px',
			},
		},
	},
	variants: {
		default: {
			field: {
				bg: '#f3f3f8',
				border: '1px solid',
				borderRadius: '8px',
				borderColor: '#f3f3f8',
				fontSize: '13px',
				fontWeight: 500,
				lineHeight: '16px',
				color: '#242533',
				_hover: {
					borderColor: '#f3f3f8',
				},
				_invalid: {
					borderColor: '#ff218c',
					bg: 'rgba(255, 33, 140, 0.04)',
				},
				_focus: {
					outline: 'none',
					borderColor: '#644ded',
					bg: '#FFFFFF',
				},
			},
		},
		file: {
			field: {
				position: 'absolute',
				top: 0,
				right: 0,
				minW: '100%',
				minH: '100%',
				opacity: 0,
				outline: 'none',
				cursor: 'inherit',
				display: 'block',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'default',
	},
};
