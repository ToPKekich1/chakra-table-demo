import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Box, Grid, Text } from '@chakra-ui/react';

import { getCustomerById } from 'entities/customers/model';
import { LayoutForBlockWithSidebar } from 'shared/ui';
import { DefaultAppHeader } from 'entities/default-app-header';
import { NavigationSidebar } from 'widgets/navigation-sidebar';

const CustomerPage = () => {
	const { customerId } = useParams();

	if (!customerId) throw new Error('');

	const customer = useMemo(() => getCustomerById(customerId), [customerId]);

	if (!customer) {
		return <div>404</div>;
	}

	return (
		<>
			<Helmet title={`${customer.firstName} ${customer.lastName}`} />
			<LayoutForBlockWithSidebar>
				<NavigationSidebar />
				<Box h="100%">
					<DefaultAppHeader />
					<Grid gap="20px" p="10px 20px">
						<Text>ID: {customer.id}</Text>
						<Text>First Name: {customer.firstName}</Text>
						<Text>Last Name: {customer.lastName}</Text>
					</Grid>
				</Box>
			</LayoutForBlockWithSidebar>
		</>
	);
};

export default CustomerPage;
