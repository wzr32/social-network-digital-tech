import { FC, useState } from "react";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

import { getUserPostsService } from "../../services";
import { PostCardProfile } from "../post-card-profile";
import { UserPostViewDialog } from "../user-post-view-dialog";

import { Post, SortPostsOptions } from "@/types";
import { sortingDataByDate } from "@/utilities/sort.utility";

const UserPosts: FC = () => {
	const userPosts = getUserPostsService();

	const posts = sortingDataByDate(
		userPosts,
		"created_at",
		SortPostsOptions.DESCENDING,
	);

	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	const handleOpenDialog = (post: Post) => {
		setSelectedPost(post);
	};

	const handleCloseDialog = () => {
		setSelectedPost(null);
	};

	return (
		<>
			<Card>
				<CardContent>
					<Grid2 container spacing={2}>
						{posts.length === 0 && (
							<Grid2 size={{ xs: 12 }}>
								<Typography variant='h5' textAlign='center'>
									No posts yet
								</Typography>
							</Grid2>
						)}
						{posts.length > 1 &&
							posts.map((post) => (
								<Grid2
									key={`user-post__${Math.random()}`}
									size={{ xs: 12, md: 6, lg: 4 }}>
									<Box
										onClick={() => handleOpenDialog(post)}
										sx={{ cursor: "pointer", height: "100%" }}>
										<PostCardProfile {...post} />
									</Box>
								</Grid2>
							))}
					</Grid2>
				</CardContent>
			</Card>
			<UserPostViewDialog
				show={selectedPost !== null}
				onClose={handleCloseDialog}
				{...selectedPost}
			/>
		</>
	);
};
export default UserPosts;
