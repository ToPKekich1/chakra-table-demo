import React, { ReactElement } from 'react';
import { Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PageWithSidebarLayout = styled(Grid)`
	max-width: 100vw;

	width: 100%;
	height: 100vh;
	overflow: hidden;

	grid-template-columns: auto 1fr;
`;

type Props = {
	children: ReactElement | ReactElement[] | null;
};

export const LayoutForBlockWithSidebar: React.FC<Props> = ({ children }) => {
	return <PageWithSidebarLayout>{children}</PageWithSidebarLayout>;
};
