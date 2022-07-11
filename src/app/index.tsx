import React from 'react';

import { Routing } from 'pages';

import { withProviders } from './providers';

/**
 * Entry-point приложения
 * @remark Содержит в Provider-обертке инициализирующую логику приложения
 * @see withProviders
 */

const App = () => {
	return <Routing />;
};

export default withProviders(App);
