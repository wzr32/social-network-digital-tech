import { FC, useEffect, useState } from "react";
import {
	Button,
	CircularProgress,
	Grid2,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginType } from "../../schemas";
import { loginService } from "../../services";

import { PrivateRoutes, PublicRoutes } from "@/models";
import { useStore } from "@/store";

const defaultValues: LoginType = {
	username: "",
};

const LoginView: FC = () => {
	const navigate = useNavigate();

	const { isAuth } = useStore();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		reValidateMode: "onBlur",
		defaultValues,
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginType) => {
		setIsLoading(true);
		setTimeout(() => {
			loginService(data);
			setIsLoading(false);
		}, 2000);
	};

	useEffect(() => {
		if (isAuth) {
			navigate(PrivateRoutes.DASHBOARD);
		}
	}, [isAuth, navigate]);

	return (
		<Stack spacing={4} width='100%'>
			<Typography variant='h4' gutterBottom>
				Login
			</Typography>
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12 }}>
					<TextField
						label='username'
						size='small'
						fullWidth
						{...register("username")}
						error={Boolean(errors.username)}
						helperText={Boolean(errors.username) && errors.username?.message}
						disabled={isLoading}
					/>
				</Grid2>
			</Grid2>
			<Button
				variant='contained'
				onClick={() => {
					void handleSubmit(onSubmit)();
				}}
				disabled={isLoading}>
				{isLoading ? <CircularProgress size={20} /> : "sign in"}
			</Button>
			<Typography>
				Don &apos; t have an account{" "}
				<NavLink to={PublicRoutes.SIGN_UP} replace={true}>
					Sign up
				</NavLink>
			</Typography>
		</Stack>
	);
};

export default LoginView;
