import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { components } from './components';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = {
	config,
	components,
};

export default extendTheme(theme);
