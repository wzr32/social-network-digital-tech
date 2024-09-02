import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "../models";

import { LoginView } from "@/pages/public/auth/views/login";
import { RegisterView } from "@/pages/public/auth/views/register";
import { LayoutAuth, LayoutDashboard } from "@/layout/views";
import { DashboardView } from "@/pages/private/dashboard/views";
import { UserProfileView } from "@/pages/private/user-profile";
import { AuthGuard } from "@/guards";

const Router = () => (
	<Routes>
		<Route index element={<Navigate to={PublicRoutes.SIGN_IN} />} />
		<Route element={<LayoutAuth />}>
			<Route path={PublicRoutes.SIGN_IN} element={<LoginView />} />
			<Route path={PublicRoutes.SIGN_UP} element={<RegisterView />} />
		</Route>
		<Route element={<AuthGuard />}>
			<Route element={<LayoutDashboard />}>
				<Route path={PrivateRoutes.DASHBOARD} element={<DashboardView />} />
			</Route>
			<Route path={PrivateRoutes.USER_PROFILE} element={<UserProfileView />} />
		</Route>
	</Routes>
);
export default Router;
