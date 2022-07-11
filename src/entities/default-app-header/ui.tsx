import React from 'react';
import { Flex } from '@chakra-ui/react';

import { HeaderUserAvatar } from 'features/header-user-avatar';

const DefaultAppHeader = () => {
	return (
		<Flex
			bg="#fbfbfc"
			as="header"
			w="100%"
			h="57px"
			p="0 30px"
			justify="flex-end"
			align="center"
			borderBottom="2px solid #484964"
		>
			<HeaderUserAvatar />
		</Flex>
	);
};

export { DefaultAppHeader };
