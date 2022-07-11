import React from 'react';
import {
	Divider,
	Grid,
	IconButton,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	Radio,
	RadioGroup,
	Text,
} from '@chakra-ui/react';

import { customerModel } from 'entities/customers';
import { CustomerFields } from 'entities/customers/model';
import { FilterIcon } from 'shared/icons';

type Props = {
	field: string;
};

const CustomersTableFilter: React.FC<Props> = ({ field }) => {
	const toggleFilter = async (value: 'asc' | 'desc' | '') => {
		await customerModel.setCustomersSortFx({
			field: field as CustomerFields,
			dir: value,
		});
		return value;
	};

	return (
		<Popover placement="right-start">
			<PopoverTrigger>
				<IconButton variant="ghost" aria-label={`${field} filter`}>
					<FilterIcon w={7} h={7} />
				</IconButton>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody p="20px 15px">
					<Grid gap="20px">
						<Grid gap="20px">
							<Text fontWeight={700}>Filter</Text>
							<Input
								onChange={customerModel.setCustomersFiltersFx.prepend((e) => ({
									firstName: e.target.value,
								}))}
							/>
						</Grid>
						<Divider />
						<Grid gap="20px">
							<Text fontWeight={700}>Sorting</Text>
							<RadioGroup onChange={toggleFilter}>
								<Grid gap="10px">
									<Radio value="">-</Radio>
									<Radio value="asc">Asc</Radio>
									<Radio value="desc">Desc</Radio>
								</Grid>
							</RadioGroup>
						</Grid>
					</Grid>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export { CustomersTableFilter };
