import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, GridItem, Image, Link, Text } from '@chakra-ui/react';
import { createComponent } from 'effector-react';

import { $isNavigationOpened } from 'entities/ui/model';

const NavigationHeader = createComponent(
	$isNavigationOpened,
	(_, isNavigationOpened) => {
		return (
			<Link as={RouterLink} to="/" h="38px">
				<Grid
					p="10px 12px"
					mb="10px"
					gridTemplateColumns="37px 1fr"
					gridColumnGap="10px"
					alignItems="center"
				>
					<GridItem>
						<Image
							src="https://cdn-icons-png.flaticon.com/512/5110/5110577.png"
							alt="demo"
						/>
					</GridItem>
					<GridItem>
						<Text
							fontFamily="Nunito"
							fontWeight="800"
							whiteSpace="nowrap"
							opacity={isNavigationOpened ? 1 : 0}
							transition="opacity 0.3s ease-in-out"
						>
							Chakra UI Demo
						</Text>
					</GridItem>
				</Grid>
			</Link>
		);
	},
);

export { NavigationHeader };
