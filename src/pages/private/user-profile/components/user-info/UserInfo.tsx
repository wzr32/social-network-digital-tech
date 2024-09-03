import { ChangeEvent, FC, useRef, useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CircularProgress,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import toast from "react-hot-toast";

import { createBatchPostsService, getUserPostsService } from "../../services";
import { userPostsArraySchema } from "../../schema";

import { useStore } from "@/store";
import { Post } from "@/types";

const UserInfo: FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const { user, logoutUser } = useStore();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [jsonData, setJsonData] = useState<{
		fileName: string;
		posts: Post[];
	} | null>(null);

	const handleOpenInput = (): void => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
		if (!e.target.files) return;
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			if (!e.target) return;

			const json = JSON.parse(e.target.result as string) as Post[];

			const result = userPostsArraySchema.safeParse(json);
			if (!result.success) {
				toast.error("Invalid json file");
				if (inputRef.current) {
					inputRef.current.value = "";
				}
			} else {
				setJsonData({ fileName: file.name, posts: result.data });
			}
		};

		reader.readAsText(file);
	};

	const handleRemove = (): void => {
		if (inputRef.current) {
			inputRef.current.value = "";
			setJsonData(null);
		}
	};

	const handleExportData = (): void => {
		const userPosts = getUserPostsService();
		const jsonData = JSON.stringify(userPosts, null, 2);
		const blob = new Blob([jsonData], { type: "application/json" });
		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "user_data.json";
		link.click();

		URL.revokeObjectURL(url);
	};

	const handleSubmitBatch = (): void => {
		if (!jsonData) {
			toast.error("No data to upload");
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			const response = createBatchPostsService(jsonData?.posts);
			if (response.success) {
				if (inputRef.current) {
					inputRef.current.value = "";
				}
				setJsonData(null);
				toast.success("Posts uploaded successfully");
			}
			setIsLoading(false);
		}, 2000);
	};

	const handleLogout = (): void => {
		logoutUser();
	};

	return (
		<>
			<Card>
				<CardContent>
					<Stack spacing={2}>
						<Stack
							spacing={2}
							direction='row'
							alignItems='center'
							justifyContent='space-between'
							flexWrap='wrap'>
							<Stack spacing={2} direction='row' alignItems='center'>
								<Avatar
									src={user.avatar ?? ""}
									sx={{ width: "35px", height: "35px" }}
								/>
								<Box>
									<Typography>
										{user.name ?? ""} {user.surname ?? ""}
									</Typography>
									<Typography fontWeight='bold'>
										@{user.username ?? ""}
									</Typography>
								</Box>
							</Stack>
							<Button onClick={handleLogout} variant='outlined'>
								Logout
							</Button>
						</Stack>

						<Box>
							<Stack spacing={2}>
								{jsonData && (
									<Stack spacing={2}>
										<Box
											sx={{
												display: "flex",
												direction: "row",
												gap: 2,
												alignItems: "center",
												justifyContent: "space-between",
												backgroundColor: "primary.main",
												color: "primary.contrastText",
												padding: "0.5em 1em",
												borderRadius: "10px",
											}}>
											<Typography>{jsonData?.fileName ?? ""}</Typography>
											<IconButton onClick={handleRemove} disabled={isLoading}>
												<Close sx={{ color: "primary.contrastText" }} />
											</IconButton>
										</Box>
										<Stack
											spacing={2}
											direction='row'
											justifyContent='space-between'
											alignItems='center'
											flexWrap='wrap'>
											<Typography>
												{jsonData?.posts.length} post to upload
											</Typography>
											<Button
												variant='contained'
												onClick={handleSubmitBatch}
												disabled={isLoading}>
												{isLoading ? <CircularProgress size={20} /> : "Upload"}
											</Button>
										</Stack>
									</Stack>
								)}
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-center",
										gap: "10px",
										alignItems: "center",
									}}>
									<Button
										onClick={handleOpenInput}
										variant='contained'
										disabled={isLoading}>
										Import from json
									</Button>
									<Button
										onClick={handleExportData}
										variant='outlined'
										disabled={isLoading}>
										Export to json
									</Button>
								</Box>
							</Stack>
						</Box>
					</Stack>
				</CardContent>
			</Card>
			<input
				ref={inputRef}
				accept='.json'
				type='file'
				onChange={handleChangeInput}
				hidden
			/>
		</>
	);
};

export default UserInfo;
