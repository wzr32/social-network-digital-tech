import { FC } from "react";
import { Favorite, LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

import { Post } from "@/types";

const PostCardProfile: FC<Post> = ({
	id,
	images,
	likes,
	location,
	message,
}) => (
	<Card
		elevation={0}
		sx={{ height: "100%", minHeight: "300px", maxHeight: "300px" }}>
		<CardContent sx={{ height: "inherit" }}>
			<Stack
				spacing={1}
				justifyContent='space-between'
				sx={{ height: "inherit" }}>
				<Typography variant='body1'>{message}</Typography>
				{images && (
					<Box sx={{ height: "200px" }}>
						<img
							src={images ?? ""}
							alt={id}
							style={{
								objectFit: "contain",
								width: "100%",
								height: "100%",
								borderRadius: "8px",
							}}
						/>
					</Box>
				)}
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
