import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

/**
 * @remark генерация коллеции данных
 */

export type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	progress: number;
	status: 'relationship' | 'complicated' | 'single';
};

export type Customer = {
	id: string;
} & Person;

const range = (len: number) => {
	const arr = [];
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

export const newPerson = (): Person => {
	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		age: faker.datatype.number(40),
		visits: faker.datatype.number(1000),
		progress: faker.datatype.number(100),
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		status: faker.helpers.shuffle<Person['status']>([
			'relationship',
			'complicated',
			'single',
		])[0]!,
	};
};

export function makeData(...lens: number[]) {
	const makeDataLevel = (depth = 0): Customer[] => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const len = lens[depth]!;
		return range(len).map(() => {
			return {
				id: uuidv4(),
				...newPerson(),
			};
		});
	};

	return makeDataLevel();
}
