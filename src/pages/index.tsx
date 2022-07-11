import React from 'react';
import { useRoutes } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('./dashboard'));
const CustomerPage = React.lazy(() => import('./customer'));
const HowlyPage = React.lazy(() => import('./howly'));

/**
 * Роутинг приложения
 * Используется react-router-dom v6
 */
const Routing = () => {
	const routes = useRoutes([
		{ path: '/', element: <DashboardPage /> },
		{ path: 'customer/:customerId', element: <CustomerPage /> },
		{ path: '*', element: <div>404</div> },
		{ path: 'howly', element: <HowlyPage /> },
	]);

	return <>{routes}</>;
};

export { Routing };
