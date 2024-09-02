import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar } from "../components/navbar";

const LayoutDashboard = () => (
	<>
		<Navbar />
		<Box component='main' sx={{ padding: "2em 3em" }}>
			<Outlet />
		</Box>
	</>
);
export default LayoutDashboard;
