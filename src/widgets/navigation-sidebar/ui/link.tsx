import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { createComponent } from 'effector-react';

import { $isNavigationOpened } from 'entities/ui/model';

interface Props {
	icon: JSX.Element;
	text?: string;
	onClick?: () => void;
	href?: string;
}

const StyledTextWrapper = styled(Text)`
	margin-bottom: 15px;

	display: grid;
	padding: 19px 20px;
	grid-template-columns: 22px 1fr;
	grid-column-gap: 9px;

	align-items: center;

	border-radius: 0 16px 16px 0;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background: rgba(100, 77, 237, 0.08);
		color: #644ded;
		.text {
			color: #644ded;
		}
	}

	&[aria-current='page'] {
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

	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;
`;

const NavigationLink = createComponent(
	$isNavigationOpened,
	({ icon, text, onClick, href }: Props, isNavigationOpened) => {
		return href ? (
			<StyledTextWrapper as={NavLink} onClick={onClick} to={href}>
				{icon}
				{text && (
					<StyledText className="text" isOpen={isNavigationOpened}>
						{text}
					</StyledText>
				)}
			</StyledTextWrapper>
		) : (
			<StyledTextWrapper onClick={onClick}>
				{icon}
				{text && (
					<StyledText className="text" isOpen={isNavigationOpened}>
						{text}
					</StyledText>
				)}
			</StyledTextWrapper>
		);
	},
);

export { NavigationLink };
