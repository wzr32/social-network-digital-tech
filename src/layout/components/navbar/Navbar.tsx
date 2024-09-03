import { FC, useContext } from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";

import { CustomThemeContext } from "@/context/themeContext";
import mainLogo from "@/assets/logo/logo.svg";

const Navbar: FC = () => {
	const { isDark, handleToggleTheme } = useContext(CustomThemeContext);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}>
							<Menu />
						</IconButton>

						<Box component='div' sx={{ flexGrow: 1, height: "40px" }}>
							<img
								src={mainLogo}
								alt='Digital tech'
								style={{ objectFit: "contain", height: "100%" }}
							/>
						</Box>
						<IconButton onClick={handleToggleTheme}>
							{isDark ? <LightMode /> : <DarkMode />}
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Navbar;
