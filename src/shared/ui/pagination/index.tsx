import React, { useMemo } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

import { ArrowLeftIcon, ArrowRightIcon } from 'shared/icons';
import { ArrowButton } from 'shared/ui';

interface Props {
	page: number;
	itemsCount: number;
	onPageSelect: (v: number) => void;
	limit: number;
}

const DOTS = '...';

const range = (start: number, end: number): string[] => {
	const length = end - start + 1;
	return Array.from({ length }, (_, idx) => `${idx + start}`);
};

const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage,
}: {
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
	currentPage: number;
}): string[] => {
	return useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);
		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount,
		);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, `${totalPageCount}`];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount,
			);
			return [`${firstPageIndex}`, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [
				`${firstPageIndex}`,
				DOTS,
				...middleRange,
				DOTS,
				`${lastPageIndex}`,
			];
		}

		return [];
	}, [totalCount, pageSize, siblingCount, currentPage]);
};

const Pagination: React.FC<Props> = ({
	page,
	itemsCount,
	onPageSelect,
	limit,
}) => {
	const pagesCount = useMemo(
		() => Math.ceil(itemsCount / limit),
		[itemsCount, limit],
	);

	const pagination = usePagination({
		totalCount: itemsCount,
		currentPage: page + 1,
		pageSize: limit,
	});

	const onNext = () => {
		if (page < pagesCount) onPageSelect(page + 1);
	};

	const onPrev = () => {
		if (page > 0) onPageSelect(page - 1);
	};

	const onPage = (btnNumber: number) => onPageSelect(btnNumber - 1);

	return (
		<Flex justify="flex-end" align="center" m="24px 0 41px">
			<ArrowButton
				icon={<ArrowLeftIcon />}
				handleClick={onPrev}
				isDisabled={page === 0}
			/>
			{pagination.map((el) =>
				el === DOTS ? (
					<Text as="p" mr="5px" key={el}>
						{DOTS}
					</Text>
				) : (
					<Button
						key={el}
						marginRight="5px"
						borderRadius="9999px"
						variant="ghost"
						size="sm"
						disabled={Number.parseInt(el, 10) === page + 1}
						onClick={() => onPage(Number.parseInt(el, 10))}
					>
						{el}
					</Button>
				),
			)}
			<ArrowButton
				icon={<ArrowRightIcon />}
				handleClick={onNext}
				isDisabled={page === pagesCount}
			/>
		</Flex>
	);
};

export { Pagination };
