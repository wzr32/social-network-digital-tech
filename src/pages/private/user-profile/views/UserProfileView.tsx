import { FC } from "react";
import { Container, Grid2 } from "@mui/material";

import { UserPosts } from "../components/user-posts";
import { UserInfo } from "../components/user-info";

const UserProfileView: FC = () => (
	<Container maxWidth='xl'>
		<Grid2 container spacing={3}>
			<Grid2 size={{ xs: 12, md: 6, lg: 8 }} sx={{ order: { xs: 1, md: 0 } }}>
				<UserPosts />
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6, lg: 4 }} sx={{ order: { xs: 0, md: 1 } }}>
				<UserInfo />
			</Grid2>
		</Grid2>
	</Container>
);

export default UserProfileView;
