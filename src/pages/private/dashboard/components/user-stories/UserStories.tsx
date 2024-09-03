import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Story_1 from "@/assets/dummy/stories/story_1.png";
import Story_2 from "@/assets/dummy/stories/story_2.jpg";
import Story_3 from "@/assets/dummy/stories/story_3.jpg";

const stories = [
	{
		image: Story_1,
	},
	{
		image: Story_2,
	},
	{
		image: Story_3,
	},
];

const UserStories: FC = () => (
	<Box>
		<Typography fontWeight='bold' gutterBottom>
			Stories
		</Typography>
		<Stack spacing={2} direction='row'>
			{stories.map((story, index) => (
				<Box
					key={`stories__${Math.random()}`}
					sx={{ width: "150px", height: "200px", borderRadius: "10px" }}>
					<img
						src={story.image}
						alt={`story_${index}`}
						style={{
							objectFit: "cover",
							width: "100%",
							height: "100%",
							borderRadius: "inherit",
						}}
					/>
				</Box>
			))}
		</Stack>
	</Box>
);
export default UserStories;
