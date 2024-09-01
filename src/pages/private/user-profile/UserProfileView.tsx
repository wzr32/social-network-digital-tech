import { FC } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";

const UserProfileView: FC = () => (
	<Grid2 container spacing={3}>
		<Grid2 size={{ xs: 12, md: 6, lg: 8 }}>
			<Card>
				<CardContent>
					<Grid2 container spacing={2}>
						{[...(Array(20) as unknown[])].map((_, index) => (
							<Grid2
								key={`user-post__${index}`}
								size={{ xs: 12, md: 6, lg: 4 }}>
								<Card>post {index}</Card>
							</Grid2>
						))}
					</Grid2>
				</CardContent>
			</Card>
		</Grid2>
		<Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
			<Card>
				<CardContent>
					<Stack spacing={2}>
						<Avatar />
						<Typography>@username</Typography>
						<Box>
							<Typography>xx followers</Typography>
							<Typography>xx following</Typography>
						</Box>

						<Box>
							<Button>messages</Button>
							<Button>settings</Button>
							<Button>log out</Button>
						</Box>
						<Box>
							<Button>export to json</Button>
							<Button>import from json</Button>
						</Box>
					</Stack>
				</CardContent>
			</Card>
		</Grid2>
	</Grid2>
);
export default UserProfileView;
