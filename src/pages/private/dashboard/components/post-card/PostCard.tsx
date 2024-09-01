import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const PostCard = () => (
	<Card>
		<CardContent>
			<Stack spacing={2}>
				<Typography variant='h5'>Title</Typography>
				<Typography variant='body1'>Content</Typography>
				<Box sx={{ minHeight: "100px", bgcolor: "green" }} />
				<Box>
					<Typography>post actions</Typography>
				</Box>
			</Stack>
		</CardContent>
	</Card>
);
export default PostCard;
