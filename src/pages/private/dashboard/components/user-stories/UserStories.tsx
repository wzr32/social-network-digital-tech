import { FC } from "react";
import { Box, Card, Stack, Typography } from "@mui/material";

const UserStories: FC = () => (
	<Box>
		<Typography fontWeight='bold' gutterBottom>
			Stories
		</Typography>
		<Stack spacing={2} direction='row'>
			<Card sx={{ width: "150px", height: "200px", bgcolor: "red" }} />
			<Card sx={{ width: "150px", height: "200px", bgcolor: "red" }} />
			<Card sx={{ width: "150px", height: "200px", bgcolor: "red" }} />
		</Stack>
	</Box>
);
export default UserStories;
