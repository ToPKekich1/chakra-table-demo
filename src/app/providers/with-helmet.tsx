import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

/**
 * @provider Инициализация react-helmet-async для удобной работы с meta данными приложения
 */
const withHelmet = (component: () => React.ReactNode) => () =>
	<HelmetProvider>{component()}</HelmetProvider>;

export { withHelmet };
