import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	Button,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useStore } from 'effector-react';

import { customerModel } from 'entities/customers';
import { uiModel } from 'entities/ui';
import { CustomersTableFilter } from 'features/customers';
import { Pagination } from 'shared/ui';
import { Customer } from 'shared/utils/makeData';

const DataTable = () => {
	const navigate = useNavigate();

	const customerTableData = useStore(customerModel.$customersTableData);

	const customersList = useMemo(
		() => Object.values(customerTableData.list),
		[customerTableData.list],
	);

	const handleCustomerOpen = useCallback(
		(customerId?: string) => () => {
			navigate(`/customer/${customerId}`);
		},
		[navigate],
	);

	const columns = React.useMemo<ColumnDef<Customer>[]>(
		() => [
			{
				accessorKey: 'id',
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorKey: 'firstName',
				cell: (info) => info.getValue(),
				footer: (props) => props.column.id,
			},
			{
				accessorFn: (row) => row.lastName,
				id: 'lastName',
				cell: (info) => info.getValue(),
				header: () => 'Last Name',
				footer: (props) => props.column.id,
			},

			{
				accessorKey: 'age',
				header: () => 'Age',
				footer: (props) => props.column.id,
			},
			{
				accessorKey: 'visits',
				header: () => 'Visits',
				footer: (props) => props.column.id,
			},
			{
				accessorKey: 'status',
				header: 'Status',
				footer: (props) => props.column.id,
			},
			{
				accessorKey: 'progress',
				header: 'Profile Progress',
				footer: (props) => props.column.id,
			},
		],

		[],
	);

	const table = useReactTable({
		data: customersList,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<Box p="20px 20px 0">
				<Button onClick={uiModel.toggleCreateCustomerModal.prepend(() => true)}>
					Create customer
				</Button>
			</Box>
			<TableContainer p="20px">
				<Table>
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<Th key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
										{header.column.id === 'firstName' && (
											<CustomersTableFilter field={header.column.id} />
										)}
									</Th>
								))}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.map((row) => (
							<Tr
								key={row.id}
								_hover={{ bg: '#d5c3c3', cursor: 'pointer' }}
								onClick={handleCustomerOpen(row.original?.id)}
							>
								{row.getVisibleCells().map((cell) => (
									<Td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Td>
								))}
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Pagination
				page={customerTableData.page}
				itemsCount={customerTableData.count}
				onPageSelect={customerModel.setCustomersPageFx.prepend(
					(page: number) => page,
				)}
				limit={customerTableData.size}
			/>
		</>
	);
};

export { DataTable };
