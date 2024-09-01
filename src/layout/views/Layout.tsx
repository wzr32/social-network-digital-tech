import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar } from "../components/navbar";

const Layout = () => (
	<>
		<Navbar />
		<main>
			<Container maxWidth='xl'>
				<Outlet />
			</Container>
		</main>
	</>
);
export default Layout;
