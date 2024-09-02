import { FC } from "react";
import { Grid2, Stack, Typography } from "@mui/material";

import { PostCard } from "../components/post-card";
import { UserMenu } from "../components/user-menu";
import { CreatePost } from "../components/create-post";
import { UserStories } from "../components/user-stories";
import { UserSuggestions } from "../components/user-suggestions";

import { useStore } from "@/store";

const DashboardView: FC = () => {
	const {
		data: { posts },
	} = useStore();

	return (
		<Grid2 container spacing={10}>
			<Grid2 size={{ xs: 3 }}>
				<UserMenu />
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6 }} container spacing={2}>
				<Grid2 size={{ xs: 12 }}>
					<CreatePost />
				</Grid2>
				{posts.length === 0 && (
					<Grid2 size={{ xs: 12 }}>
						<Typography textAlign='center'>No posts</Typography>
					</Grid2>
				)}
				{posts.length > 0 &&
					posts.map((post) => (
						<Grid2 size={{ xs: 12 }} key={`social-post__${Math.random()}`}>
							<PostCard {...post} />
						</Grid2>
					))}
			</Grid2>
			<Grid2 size={{ xs: 3 }}>
				<Stack spacing={6}>
					<UserStories />
					<UserSuggestions />
				</Stack>
			</Grid2>
		</Grid2>
	);
};

export default DashboardView;
