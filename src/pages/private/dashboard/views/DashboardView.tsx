import { FC } from "react";
import {
	Avatar,
	Box,
	Card,
	Chip,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";

import { PostCard } from "../components/post-card";
import { UserMenu } from "../components/user-menu";

const DashboardView: FC = () => (
	<Grid2 container spacing={10}>
		<Grid2 size={{ xs: 3 }}>
			<UserMenu />
		</Grid2>
		<Grid2 size={{ xs: 12, md: 6 }} container spacing={2}>
			{[...(Array(10) as unknown[])].map((_, index) => (
				<Grid2 size={{ xs: 12 }} key={`social-post__${index}`}>
					<PostCard key={index} />
				</Grid2>
			))}
		</Grid2>
		<Grid2 size={{ xs: 3 }}>
			<Box>
				<Typography>Stories</Typography>
				<Stack spacing={2} direction='row'>
					<Card sx={{ width: "100px", height: "200px", bgcolor: "red" }} />
					<Card sx={{ width: "100px", height: "200px", bgcolor: "red" }} />
					<Card sx={{ width: "100px", height: "200px", bgcolor: "red" }} />
					<Card sx={{ width: "100px", height: "200px", bgcolor: "red" }} />
					<Card sx={{ width: "100px", height: "200px", bgcolor: "red" }} />
				</Stack>
			</Box>
			<Box>
				<Typography>suggestions</Typography>
				<Stack spacing={2}>
					{[...(Array(5) as unknown[])].map((_, index) => (
						<Box
							key={`suggestions__${index}`}
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<Stack spacing={3} direction='row' alignItems='center'>
								<Avatar sx={{ width: 24, height: 24 }} />
								<Box>
									<Typography variant='body2'>ivan</Typography>
									<Typography variant='body2'>shevchenko</Typography>
								</Box>
							</Stack>
							<Chip clickable label='follow' />
						</Box>
					))}
				</Stack>
			</Box>
		</Grid2>
	</Grid2>
);

export default DashboardView;
