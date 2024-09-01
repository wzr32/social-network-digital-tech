import { Outlet } from "react-router-dom";

import { Navbar } from "../components/navbar";

const LayoutDashboard = () => (
	<>
		<Navbar />
		<main>
			<Outlet />
		</main>
	</>
);
export default LayoutDashboard;
