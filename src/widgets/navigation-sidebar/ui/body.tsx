import React from 'react';
import { Box, Flex, Tooltip } from '@chakra-ui/react';
import { createComponent } from 'effector-react';

import { $isNavigationOpened } from 'entities/ui/model';
import { StackIcon } from 'shared/icons';

import { NavigationLink } from './link';
import { NavigationToggleBtn } from './toggle-btn';

const NavigationBody = createComponent(
	$isNavigationOpened,
	(_, isNavigationOpened) => {
		return (
			<>
				<Flex h="calc(100% - 78px)" flexDir="column" justify="space-between">
					<Box>
						<Tooltip label="Story Management" isDisabled={isNavigationOpened}>
							<Box>
								<NavigationLink
									icon={<StackIcon w={6} h={6} />}
									text="Dashboard"
									href="/"
								/>
								<NavigationLink
									icon={<StackIcon w={6} h={6} />}
									text="Howly"
									href="/howly"
								/>
							</Box>
						</Tooltip>
					</Box>
					<Box>
						<Tooltip label="Show Menu" isDisabled={isNavigationOpened}>
							<Box>
								<NavigationToggleBtn />
							</Box>
						</Tooltip>
					</Box>
				</Flex>
			</>
		);
	},
);

export { NavigationBody };
