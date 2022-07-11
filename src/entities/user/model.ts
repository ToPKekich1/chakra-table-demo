import { createEffect, createEvent, createStore } from 'effector';

const logout = createEvent('logout user');

const loginFx = createEffect(async () => {});

const $user = createStore<{
	firstName: string;
	lastName: string;
	imageSrc: string;
}>({
	firstName: 'Dan',
	lastName: 'Abrahmov',
	imageSrc: 'https://bit.ly/dan-abramov',
})
	.on(logout, () => {
		console.log('Hello');
	})
	.on(loginFx.doneData, (state, user) => user);

export { $user, loginFx, logout };
