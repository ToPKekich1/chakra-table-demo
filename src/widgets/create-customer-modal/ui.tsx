import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	FormControl,
	FormLabel,
	Grid,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { createComponent } from 'effector-react';
import { useFormik } from 'formik';

import { customerModel } from 'entities/customers';
import { uiModel } from 'entities/ui';

type createCustomerDto = {
	firstName: string;
	lastName: string;
	age: number;
};

const CreateCustomerModal = createComponent(
	uiModel.$isCreateCustomerModalOpen,
	(_, isCreateCustomerModalOpen) => {
		const navigate = useNavigate();

		const handleModalClose = useCallback(() => {
			uiModel.toggleCreateCustomerModal(false);
		}, []);

		const formik = useFormik<createCustomerDto>({
			initialValues: {
				firstName: '',
				lastName: '',
				age: 0,
			},
			onSubmit: (values, { resetForm }) => {
				const { id } = customerModel.createCustomer(values);
				navigate(`/customer/${id}`);
				handleModalClose();
				resetForm();
			},
		});

		return (
			<Modal isOpen={isCreateCustomerModalOpen} onClose={handleModalClose}>
				<ModalOverlay />
				<form onSubmit={formik.handleSubmit}>
					<ModalContent>
						<ModalHeader>Create Customer</ModalHeader>
						<ModalCloseButton />
						<ModalBody />
						<Grid p="10px 20px" gap="15px">
							<FormControl>
								<FormLabel htmlFor="firstName">First name:</FormLabel>
								<Input
									id="firstName"
									onChange={formik.handleChange}
									value={formik.values.firstName}
								/>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="lastName">Last name:</FormLabel>
								<Input
									id="lastName"
									onChange={formik.handleChange}
									value={formik.values.lastName}
								/>
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="age">Age:</FormLabel>
								<Input
									id="age"
									onChange={formik.handleChange}
									value={formik.values.age}
								/>
							</FormControl>
						</Grid>

						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={handleModalClose}>
								Close
							</Button>
							<Button variant="ghost" type="submit">
								Create
							</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		);
	},
);

export { CreateCustomerModal };
