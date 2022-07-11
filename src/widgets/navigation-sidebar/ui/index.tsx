import React from 'react';

import { NavigationBody } from './body';
import { NavigationHeader } from './header';
import { NavigationLayout } from './layout';

export const NavigationSidebar: React.FC = () => {
	return (
		<NavigationLayout>
			<NavigationHeader />
			<NavigationBody />
		</NavigationLayout>
	);
};
