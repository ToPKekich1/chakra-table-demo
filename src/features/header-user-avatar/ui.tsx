import React from 'react';
import {
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tooltip,
} from '@chakra-ui/react';
import { createComponent } from 'effector-react';

import { userModel } from 'entities/user';

const HeaderUserAvatar = createComponent(
	userModel.$user,
	(_, { firstName, lastName, imageSrc }) => {
		return (
			<Menu>
				<Tooltip label={`${firstName} ${lastName}`}>
					<MenuButton>
						<Avatar
							w="45px"
							h="45px"
							name={`${firstName} ${lastName}`}
							src={imageSrc}
						/>
					</MenuButton>
				</Tooltip>
				<MenuList>
					<MenuItem onClick={userModel.logout.prepend(() => {})}>
						Logout
					</MenuItem>
				</MenuList>
			</Menu>
		);
	},
);

export { HeaderUserAvatar };
