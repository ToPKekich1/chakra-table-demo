import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { components } from './components';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

/**
 * Объект для расширения или перезаписи темы
 * @remark Объекты тем можно описывать в виде объектов или функций
 * @see https://chakra-ui.com/docs/styled-system/customize-theme
 */
const theme = {
	config,
	components,
};

export default extendTheme(theme);
