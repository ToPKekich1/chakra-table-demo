import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';

/**
 * @provider Инициализация роутера
 */
const withRouter = (component: () => React.ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense
				fallback={
					<Box w="full" h="full" display="flex">
						<Spinner size="xl" m="auto" />
					</Box>
				}
			>
				{component()}
			</Suspense>
		</BrowserRouter>
	);

export { withRouter };
