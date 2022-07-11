import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const checkboxStyles: ComponentStyleConfig = {
	baseStyle: {
		control: {
			w: '16px',
			border: '1.5px solid',
			borderRadius: '3px',
			borderColor: '#BCBCC6',
			_checked: {
				bg: '#644DED',
				borderColor: '#644DED',
				color: 'white',

				_hover: {
					bg: '#644DED',
					borderColor: '#644DED',
				},
			},
			_focus: {
				boxShadow: 'none',
			},
		},
	},
};
