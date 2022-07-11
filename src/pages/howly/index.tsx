import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';

import { LayoutForBlockWithSidebar } from 'shared/ui';
import { DefaultAppHeader } from 'entities/default-app-header';
import { NavigationSidebar } from 'widgets/navigation-sidebar';

const HowlyPage = () => {
	return (
		<>
			<Helmet title="DashboardPage" />
			<LayoutForBlockWithSidebar>
				<NavigationSidebar />
				<Box h="100%">
					<DefaultAppHeader />
					<Box
						as="iframe"
						w="100%"
						h="100%"
						title="naruto"
						src="https://howly.com"
						allowFullScreen
					/>
				</Box>
			</LayoutForBlockWithSidebar>
		</>
	);
};

export default HowlyPage;
