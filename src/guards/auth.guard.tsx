import { type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { PublicRoutes } from "@/models";
import { useStore } from "@/store";

export const AuthGuard: FC = () => {
	const { isAuth } = useStore();

	return isAuth ? <Outlet /> : <Navigate replace to={PublicRoutes.SIGN_IN} />;
};
