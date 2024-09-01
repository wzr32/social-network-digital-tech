import { FC } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema, RegisterType } from "../../schemas";

import { PublicRoutes } from "@/models";

const defaultValues: RegisterType = {
	username: "",
	name: "",
	surname: "",
	avatar: "",
};

const RegisterView: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		reValidateMode: "onBlur",
		defaultValues,
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = void handleSubmit(() => {
		// console.log("submitted data =>> ", data);
	});

	return (
		<Stack spacing={4}>
			<Typography variant='h4' gutterBottom>
				Register
			</Typography>
			<Grid2 container spacing={2}>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='avatar'
						size='small'
						fullWidth
						{...register("avatar")}
						error={Boolean(errors.avatar)}
						helperText={Boolean(errors.avatar) && errors.avatar?.message}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='username'
						size='small'
						fullWidth
						{...register("username")}
						error={Boolean(errors.username)}
						helperText={Boolean(errors.username) && errors.username?.message}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='name'
						size='small'
						fullWidth
						{...register("name")}
						error={Boolean(errors.name)}
						helperText={Boolean(errors.name) && errors.name?.message}
					/>
				</Grid2>
				<Grid2 size={{ xs: 12, md: 6 }}>
					<TextField
						label='surname'
						size='small'
						fullWidth
						{...register("surname")}
						error={Boolean(errors.surname)}
						helperText={Boolean(errors.surname) && errors.surname?.message}
					/>
				</Grid2>
			</Grid2>
			<Stack spacing={2}>
				<Button variant='contained' onClick={onSubmit}>
					sign up
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
