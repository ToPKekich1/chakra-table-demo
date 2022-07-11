import React from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
	icon: JSX.Element;
	isDisabled?: boolean;
	handleClick: () => void;
}

const ArrowButton: React.FC<Props> = ({
	icon,
	isDisabled = false,
	handleClick,
}) => (
	<Button
		marginRight="20px"
		variant="secondary"
		size="circle"
		onClick={handleClick}
		disabled={isDisabled}
	>
		{icon}
	</Button>
);

export { ArrowButton };
