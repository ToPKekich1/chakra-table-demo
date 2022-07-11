import React from 'react';
import { Grid, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { createComponent } from 'effector-react';

import { uiModel } from 'entities/ui';
import { $isNavigationOpened } from 'entities/ui/model';
import { ExpandIcon } from 'shared/icons';

const StyledGrid = styled(Grid)`
	margin-bottom: 25px;
	margin-top: 20px;

	display: grid;
	padding: 19px 20px;
	grid-template-columns: 22px 1fr;
	grid-column-gap: 9px;

	border-radius: 0 16px 16px 0;
	cursor: pointer;

	align-items: center;

	&:hover {
		background: rgba(100, 77, 237, 0.08);
		color: #644ded;

		.text {
			color: #644ded;
		}
	}
`;

const StyledText = styled(Text)<{ isOpen: boolean }>`
	color: #484964;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;

	white-space: nowrap;

	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const NavigationToggleBtn = createComponent(
	$isNavigationOpened,
	(_, isNavigationOpened) => (
		<StyledGrid onClick={uiModel.toggleNavigation.prepend(() => {})}>
			<ExpandIcon
				w={6}
				h={6}
				transform={isNavigationOpened ? 'rotate(180deg)' : 'rotate(0)'}
				transition="transform 0.3s ease-in-out"
			/>
			<StyledText className="text" isOpen={isNavigationOpened}>
				Hide Menu
			</StyledText>
		</StyledGrid>
	),
);

export { NavigationToggleBtn };
