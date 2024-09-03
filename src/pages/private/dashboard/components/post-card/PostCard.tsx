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

import { likePostService } from "../../services";

import { Post } from "@/types";

const PostCard: FC<Post> = ({
	author,
	created_at,
	id,
	images,
	likes,
	location,
	message,
}) => {
	const handleLike = () => {
		likePostService(id);
	};

	return (
		<Card elevation={0}>
			<CardContent>
				<Stack spacing={2}>
					{author !== undefined && (
						<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
							<Avatar
								sx={{ width: "30px", height: "30px" }}
								src={author.avatar ?? ""}
							/>
							<Typography>@{author.username}</Typography>
						</Box>
					)}
					<Typography variant='body1'>{message}</Typography>
					{images !== null && images?.length > 0 && (
						<Box sx={{ height: "300px" }}>
							<img
								src={images}
								alt={created_at ?? Math.random()}
								style={{ objectFit: "contain", width: "100%", height: "100%" }}
							/>
						</Box>
					)}
					<Stack direction='row' gap='10px' flexWrap='wrap'>
						<Chip
							label={`${likes !== undefined ? likes.length : ""} ${likes !== undefined && likes.length > 0 ? "likes" : "like"}`}
							icon={<Favorite />}
							clickable
							onClick={handleLike}
						/>
						{location && <Chip label={location} icon={<LocationOn />} />}
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};

export default PostCard;
