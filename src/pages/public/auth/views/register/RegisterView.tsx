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

import { registerSchema, RegisterType } from "../../schemas";
import { registerService } from "../../services";

import { PublicRoutes } from "@/models";
import { useStore } from "@/store";

const defaultValues: RegisterType = {
	username: "",
	name: "",
	surname: "",
	avatar: "",
};

const RegisterView: FC = () => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		reset,
	} = useForm({
		mode: "onChange",
		reValidateMode: "onBlur",
		defaultValues,
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterType) => {
		setIsLoading(true);
		setTimeout(() => {
			registerService(data);
			setIsLoading(false);
		}, 2000);
	};

	useEffect(() => {
		const unSubs = useStore.subscribe((state) => {
			const username = getValues("username");
			if (state.users.some((u) => u.username === username)) {
				reset();
				navigate(PublicRoutes.SIGN_IN);
			}
		});

		return () => {
			unSubs();
		};
	}, [reset, navigate, getValues]);

	return (
		<Stack spacing={4}>
			<Typography variant='h4' gutterBottom>
				Register
			</Typography>
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='Avatar'
						size='small'
						fullWidth
						{...register("avatar")}
						error={Boolean(errors.avatar)}
						helperText={Boolean(errors.avatar) && errors.avatar?.message}
						disabled={isLoading}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='Username'
						size='small'
						fullWidth
						{...register("username")}
						error={Boolean(errors.username)}
						helperText={Boolean(errors.username) && errors.username?.message}
						disabled={isLoading}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='Name'
						size='small'
						fullWidth
						{...register("name")}
						error={Boolean(errors.name)}
						helperText={Boolean(errors.name) && errors.name?.message}
						disabled={isLoading}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='Surname'
						size='small'
						fullWidth
						{...register("surname")}
						error={Boolean(errors.surname)}
						helperText={Boolean(errors.surname) && errors.surname?.message}
						disabled={isLoading}
					/>
				</Grid2>
			</Grid2>
			<Stack spacing={2}>
				<Button
					variant='contained'
					onClick={() => {
						void handleSubmit(onSubmit)();
					}}
					disabled={isLoading}>
					{isLoading ? <CircularProgress size={20} /> : "sign up"}
				</Button>
				<Typography variant='body2'>
					have an account?{" "}
					<NavLink to={PublicRoutes.SIGN_IN} replace={true}>
						sign in
					</NavLink>
				</Typography>
			</Stack>
		</Stack>
	);
};

export default RegisterView;
