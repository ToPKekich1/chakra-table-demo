/**
 * Модуль для работы с данными
 * Создается коллекция из 1000 записей и фронт работает с ней, как с API
 * Есть сложности с фильтрами и сортом,
 * так как API с бека тянет новую коллекцию по каждому запросу, а у нас она генерируется один раз
 */

import { createEffect, createStore } from 'effector';
import { v4 as uuidv4 } from 'uuid';

import { Customer, makeData, newPerson } from 'shared/utils/makeData';

export type CustomerFields = keyof Customer;

type Filters = {
	firstName?: string;
};

type Sort = {
	field: CustomerFields | '';
	dir: 'asc' | 'desc' | '';
};

type Store = {
	list: Record<string, Customer>;
	page: number;
	size: number;
	count: number;
	filters: Filters;
	sort: Sort;
};

type CreateCustomerDto = {
	firstName: string;
	lastName: string;
	age: number;
};

const customers = makeData(1000);

export const getCustomerById = (id: string): Customer | undefined =>
	customers.find((c) => c.id === id);
export const createCustomer = (createCustomerDto: CreateCustomerDto) => {
	const customer = {
		id: uuidv4(),
		...newPerson(),
		...createCustomerDto,
	};

	customers.unshift(customer);
	return customer;
};

/**
 * Каждый эффект должен выполнять запрос и возвращать нам коллекцию данных
 * Из-за отсутствия API - вы видете следующую страшилку (Sorry)
 * //FIXME: Добавить API
 */
export const setCustomersPageFx = createEffect((page: number) => page);
export const setCustomersFiltersFx = createEffect(
	(filters: Filters) => filters,
);
export const setCustomersSortFx = createEffect((sort: Sort) => sort);

export const $customersTableData = createStore<Store>({
	list: customers
		.slice(0, 10)
		.reduce((acc, customer) => ({ ...acc, [customer.id]: customer }), {}),
	page: 0,
	size: 10,
	count: customers.length,
	filters: {},
	sort: {
		field: '',
		dir: '',
	},
});

$customersTableData
	.on(setCustomersPageFx.doneData, (state, page) => ({
		...state,
		page,
		list: customers
			.slice(state.size * page, state.size * (page + 1))
			.reduce((acc, customer) => ({ ...acc, [customer.id]: customer }), {}),
	}))
	.on(setCustomersFiltersFx.doneData, (state, filters) => ({
		...state,
		filters,
		list: customers
			.filter((d) =>
				d.firstName
					.toLowerCase()
					.includes(filters.firstName?.toLowerCase() || ''),
			)
			.slice(0, state.size - 1)
			.reduce((acc, customer) => ({ ...acc, [customer.id]: customer }), {}),
	}))
	.on(setCustomersSortFx.doneData, (state, sort) => ({
		...state,
		sort: sort.dir
			? sort
			: {
					field: '',
					dir: '',
			  },
		list: !sort.dir
			? customers
					.slice(0, state.size - 1)
					.reduce((acc, customer) => ({ ...acc, [customer.id]: customer }), {})
			: [...customers]
					.sort((a, b) => {
						if (sort.dir === 'asc') {
							return a[sort.field as CustomerFields] >
								b[sort.field as CustomerFields]
								? 1
								: -1;
						}
						return a[sort.field as CustomerFields] <
							b[sort.field as CustomerFields]
							? 1
							: -1;
					})
					.slice(0, state.size - 1)
					.reduce((acc, customer) => ({ ...acc, [customer.id]: customer }), {}),
	}));
