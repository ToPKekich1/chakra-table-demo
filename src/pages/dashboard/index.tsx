import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';

import { LayoutForBlockWithSidebar } from 'shared/ui';
import { CreateCustomerModal } from 'widgets/create-customer-modal';
import { DataTable } from 'widgets/customers-table';
import { DefaultAppHeader } from 'entities/default-app-header';
import { NavigationSidebar } from 'widgets/navigation-sidebar';

const DashboardPage = () => {
	return (
		<>
			<Helmet title="DashboardPage" />
			<LayoutForBlockWithSidebar>
				<NavigationSidebar />
				<Box h="100%">
					<DefaultAppHeader />
					<DataTable />
				</Box>
			</LayoutForBlockWithSidebar>
			<CreateCustomerModal />
		</>
	);
};

export default DashboardPage;
