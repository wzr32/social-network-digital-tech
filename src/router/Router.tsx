import { Navigate, Route, Routes } from "react-router-dom";

import { PublicRoutes } from "../models";

import { LoginView } from "@/pages/public/auth/views/login";
import { RegisterView } from "@/pages/public/auth/views/register";
import { Layout, LayoutAuth } from "@/layout/views";

const Router = () => (
	<Routes>
		<Route index element={<Navigate to={PublicRoutes.SIGN_IN} />} />
		<Route element={<LayoutAuth />}>
			<Route path={PublicRoutes.SIGN_IN} element={<LoginView />} />
			<Route path={PublicRoutes.SIGN_UP} element={<RegisterView />} />
		</Route>
		<Route element={<Layout />} />
	</Routes>
);
export default Router;
