import { FC } from "react";
import { Favorite, LocationOn } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Chip,
	Stack,
	Typography,
} from "@mui/material";

import { Post } from "@/types";

const PostCardProfile: FC<Post> = ({ author, likes, location, message }) => (
	<Card elevation={0}>
		<CardContent>
			<Stack spacing={2}>
				{author !== undefined && (
					<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
						<Avatar
							sx={{ width: "30px", height: "30px" }}
							src={author.avatar}
						/>
						<Typography>@{author.username}</Typography>
					</Box>
				)}
				<Typography variant='body1'>{message}</Typography>
				<Box sx={{ maxHeight: "300px", bgcolor: "green" }} />
				<Stack
					direction='row'
					gap='10px'
					flexWrap='wrap'
					justifyContent='flex-end'>
					<Chip
						label={`${likes !== undefined ? likes.length : ""} ${likes !== undefined && likes.length > 0 ? "likes" : "like"}`}
						icon={<Favorite />}
					/>
					{location && <Chip label={location} icon={<LocationOn />} />}
				</Stack>
			</Stack>
		</CardContent>
	</Card>
);

export default PostCardProfile;
