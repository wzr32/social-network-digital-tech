import { FC } from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Navbar: FC = () => (
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
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						DIGITAL TECH
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</Container>
		</AppBar>
	</Box>
);

export default Navbar;
