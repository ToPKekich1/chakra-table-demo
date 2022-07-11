import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

/**
 * @provider Инициализация Chakra-UI для корректного использования компонентов
 */
const withChakra = (component: () => React.ReactNode) => () =>
	<ChakraProvider theme={theme}>{component()}</ChakraProvider>;

export { withChakra };
