import { FC, useEffect, useRef, useState } from "react";
import {
	Avatar,
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
import { convertBase64 } from "@/utilities";

const defaultValues: RegisterType = {
	username: "",
	name: "",
	surname: "",
	avatar: "",
};

const RegisterView: FC = () => {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [imageFile, setImageFile] = useState<string | null>(null);

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
	const handleInputFile = async (
		e: React.ChangeEvent<HTMLInputElement>,
	): Promise<void> => {
		if (!e.target.files) return;
		const file = e.target.files[0];

		if (file) {
			const base64 = await convertBase64(file);
			setImageFile(String(base64));
			return;
		}

		if (inputRef.current) {
			inputRef.current.value = "";
		}
		setImageFile(null);
	};

	const handleOpenInput = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleRemove = (): void => {
		if (inputRef.current) {
			inputRef.current.value = "";
		}
		setImageFile(null);
	};

	const onSubmit = (data: RegisterType) => {
		setIsLoading(true);

		const auxObj = { ...data };
		Object.assign(auxObj, { avatar: imageFile });

		setTimeout(() => {
			registerService(auxObj);
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
		<>
			<Stack spacing={4}>
				<Typography variant='h4' gutterBottom>
					Register
				</Typography>
				<Grid2 container spacing={2}>
					<Grid2 size={{ xs: 12 }}>
						<Stack spacing={2} justifyContent='center' alignItems='center'>
							<Typography variant='body1' textAlign='center'>
								Avatar
							</Typography>
							<Avatar sx={{ width: 70, height: 70 }} src={imageFile ?? ""} />
							<Stack
								spacing={2}
								direction='row'
								justifyContent='center'
								alignItems='center'
								flexWrap='wrap'>
								{!imageFile ? (
									<Button variant='contained' onClick={handleOpenInput}>
										Upload
									</Button>
								) : (
									<Button
										variant='contained'
										color='error'
										onClick={handleRemove}>
										Remove
									</Button>
								)}
							</Stack>
						</Stack>
					</Grid2>
					<Grid2 size={{ xs: 12 }}>
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
						<NavLink
							to={PublicRoutes.SIGN_IN}
							replace={true}
							style={{ textDecorationColor: "inherit", color: "inherit" }}>
							Sign in
						</NavLink>
					</Typography>
				</Stack>
			</Stack>
			<input
				ref={inputRef}
				type='file'
				accept='.png,.jpeg,.jpg'
				hidden
				onChange={(e) => {
					void handleInputFile(e);
				}}
			/>
		</>
	);
};

export default RegisterView;
