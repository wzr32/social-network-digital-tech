import { FC } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginType } from "../../schemas";

import { PublicRoutes } from "@/models";

const defaultValues: LoginType = {
	username: "",
};

const LoginView: FC = () => {
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

	const onSubmit = void handleSubmit(() => {
		// console.log("submitted data =>> ", data);
	});

	return (
		<Stack spacing={4}>
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
					/>
				</Grid2>
			</Grid2>
			<Button variant='contained' onClick={onSubmit}>
				sign in
			</Button>
			<Typography>
				Don &apos; t have an account{" "}
				<NavLink to={PublicRoutes.SIGN_UP} replace={true}>
					sign up
				</NavLink>
			</Typography>
		</Stack>
	);
};
export default LoginView;
