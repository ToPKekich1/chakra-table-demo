import { createEvent, createStore } from 'effector';

export const toggleNavigation = createEvent('toggle navigation');
export const toggleCreateCustomerModal = createEvent<boolean>(
	'toggle create customer modal',
);

export const $isCreateCustomerModalOpen = createStore(false);
export const $isNavigationOpened = createStore(true);

$isNavigationOpened.on(toggleNavigation, (state) => !state);

$isCreateCustomerModalOpen.on(
	toggleCreateCustomerModal,
	(_, modalState) => modalState,
);
