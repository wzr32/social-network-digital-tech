import { FC } from "react";
import { Card, CardContent, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";

import LoginImage from "@/assets/bg/auth_bg.jpg";

const LayoutAuth: FC = () => (
	<Grid2 container spacing={2} sx={{ height: "100dvh" }}>
		<Grid2
			size={{ xs: 12, md: 6 }}
			sx={{ display: { xs: "none", md: "block" } }}>
			<Card elevation={0} variant='outlined' sx={{ height: "100%" }}>
				<CardContent sx={{ height: "inherit" }}>
					<img
						src={LoginImage}
						alt='auth-images'
						style={{
							objectFit: "cover",
							width: "100%",
							height: "100%",
						}}
					/>
				</CardContent>
			</Card>
		</Grid2>
		<Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "inherit" }}>
			<Card elevation={0} variant='outlined' sx={{ height: "inherit" }}>
				<CardContent
					sx={{ height: "inherit", display: "grid", placeItems: "center" }}>
					<Outlet />
				</CardContent>
			</Card>
		</Grid2>
	</Grid2>
);

export default LayoutAuth;
