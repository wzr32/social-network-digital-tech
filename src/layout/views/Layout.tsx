import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { Navbar } from "../components/navbar";

import { UserMenu } from "@/pages/private/dashboard/components/user-menu";
import { SideDrawer } from "@/pages/private/dashboard/components/side-drawer";

const Layout: FC = () => {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleOpen = (): void => {
		setShowMenu(true);
	};

	const handleClose = (): void => {
		setShowMenu(false);
	};

	return (
		<>
			<Navbar handleOpen={handleOpen} />
			{isMobileView && showMenu && (
				<SideDrawer open={showMenu} handleClose={handleClose}>
					<UserMenu />
				</SideDrawer>
			)}
			<Box
				component='main'
				sx={{ padding: { xs: "1.2em .5em", md: "2em 3em" } }}>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
