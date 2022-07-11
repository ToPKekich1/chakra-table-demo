import React from 'react';
import { Box } from '@chakra-ui/react';
import { createComponent } from 'effector-react';

import { $isNavigationOpened } from 'entities/ui/model';

const NavigationLayout = createComponent(
	$isNavigationOpened,
	({ children }, isNavigationOpened) => {
		return (
			<Box
				as="nav"
				w={!isNavigationOpened ? '60px' : '220px'}
				overflow="hidden"
				bg="#fbfbfc"
				transition="width 0.3s ease-in-out"
				borderRight="2px solid #484964"
			>
				{children}
			</Box>
		);
	},
);
export { NavigationLayout };
