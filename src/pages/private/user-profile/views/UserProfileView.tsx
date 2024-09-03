import { FC } from "react";
import { Button, Container, Grid2 } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import { UserPosts } from "../components/user-posts";
import { UserInfo } from "../components/user-info";

import { PrivateRoutes } from "@/models";

const UserProfileView: FC = () => (
	<Container maxWidth='xl'>
		<Grid2 container spacing={2}>
			<Grid2 size={{ xs: 12 }}>
				<Button
					component={NavLink}
					to={PrivateRoutes.DASHBOARD}
					sx={{ textDecoration: "none" }}
					startIcon={<ArrowBackIos />}>
					Volver
				</Button>
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6, lg: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
				<UserPosts />
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6, lg: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
				<UserInfo />
			</Grid2>
		</Grid2>
	</Container>
);

export default UserProfileView;
