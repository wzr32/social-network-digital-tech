import { FC, useState } from "react";
import {
	Button,
	Grid2,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { PostCard } from "../components/post-card";
import { UserMenu } from "../components/user-menu";
import { CreatePost } from "../components/create-post";
import { UserStories } from "../components/user-stories";
import { UserSuggestions } from "../components/user-suggestions";

import { useStore } from "@/store";
import { SortPostsOptions } from "@/types";
import { sortingDataByDate } from "@/utilities/sort.utility";

const DashboardView: FC = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

	const {
		data: { posts },
	} = useStore();

	const [sorting, setSorting] = useState<SortPostsOptions>(
		SortPostsOptions.DESCENDING,
	);

	const usersPosts = sortingDataByDate(posts, "created_at", sorting);

	return (
		<Grid2 container spacing={isMobileView ? 3 : 10}>
			<Grid2 size={{ xs: 3 }} sx={{ display: { xs: "none", md: "inherit" } }}>
				<UserMenu />
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6 }} container spacing={2} sx={{ order: 1 }}>
				<Grid2 size={{ xs: 12 }}>
					<CreatePost />
				</Grid2>
				<Grid2 size={{ xs: 12 }}>
					<Stack
						spacing={2}
						direction='row'
						justifyContent='flex-end'
						alignItems='center'>
						<Typography>{"Post's order"}</Typography>
						<Button
							onClick={() => setSorting(SortPostsOptions.ASCENDING)}
							variant={
								sorting === SortPostsOptions.ASCENDING
									? "contained"
									: "outlined"
							}
							size='small'>
							newer
						</Button>
						<Button
							onClick={() => setSorting(SortPostsOptions.DESCENDING)}
							variant={
								sorting === SortPostsOptions.DESCENDING
									? "contained"
									: "outlined"
							}
							size='small'>
							oldest
						</Button>
					</Stack>
				</Grid2>
				{usersPosts.length === 0 && (
					<Grid2 size={{ xs: 12 }}>
						<Typography textAlign='center'>No posts</Typography>
					</Grid2>
				)}
				{usersPosts.length > 0 &&
					usersPosts.map((post) => (
						<Grid2 size={{ xs: 12 }} key={`social-post__${Math.random()}`}>
							<PostCard {...post} />
						</Grid2>
					))}
			</Grid2>
			<Grid2 size={{ xs: 12, md: 3 }} sx={{ order: { xs: 0, md: 3 } }}>
				<Stack spacing={6}>
					<UserStories />
					<UserSuggestions />
				</Stack>
			</Grid2>
		</Grid2>
	);
};

export default DashboardView;
