import { FC, useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import LoginImage from "@/assets/bg/auth_bg.jpg";
import mainLogo from "@/assets/logo/logo.svg";
import { useStore } from "@/store";
import { PrivateRoutes } from "@/models";

const LayoutAuth: FC = () => {
	const navigate = useNavigate();
	const { isAuth } = useStore();

	useEffect(() => {
		if (isAuth) {
			navigate(PrivateRoutes.DASHBOARD);
		}
	}, [isAuth, navigate]);

	return (
		<Grid2 container spacing={4} sx={{ height: "100dvh" }}>
			<Grid2
				size={{ xs: 12, md: 6 }}
				sx={{ display: { xs: "none", md: "block" } }}>
				<Box
					sx={{ height: "100%", padding: "16px 30px", position: "relative" }}>
					<Box sx={{ position: "absolute", left: 50, top: 30 }}>
						<img src={mainLogo} alt='Digital tech' />
					</Box>
					<img
						src={LoginImage}
						alt='auth-images'
						style={{
							objectFit: "cover",
							width: "100%",
							height: "100%",
							borderRadius: "8px",
						}}
					/>
				</Box>
			</Grid2>
			<Grid2 size={{ xs: 12, md: 6 }} sx={{ height: "inherit" }}>
				<Box
					sx={{
						height: "inherit",
						display: "grid",
						placeItems: "center",
						maxWidth: "700px",
						margin: "0 auto",
					}}>
					<Outlet />
				</Box>
			</Grid2>
		</Grid2>
	);
};

export default LayoutAuth;
