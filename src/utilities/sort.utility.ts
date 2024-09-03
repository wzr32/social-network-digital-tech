import { SortPostsOptions } from "@/types";

export const sortingDataByDate = <T>(
	array: T[],
	filter: keyof T,
	order: SortPostsOptions,
): T[] =>
	array.sort((a, b) => {
		const date_1 = new Date(String(a[filter]));
		const date_2 = new Date(String(b[filter]));

		if (order === SortPostsOptions.DESCENDING) {
			return date_1.getTime() - date_2.getTime();
		} else {
			return date_2.getTime() - date_1.getTime();
		}
	});
