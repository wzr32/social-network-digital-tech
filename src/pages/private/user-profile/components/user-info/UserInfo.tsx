import { ChangeEvent, FC, useRef, useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { useStore } from "@/store";

const UserInfo: FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const { user } = useStore();

	const [uploadedJson, setUploadedJson] = useState<File | null>(null);

	const handleOpenInput = (): void => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
		setUploadedJson(e.target.files ? e.target.files[0] : null);
	};

	const handleRemove = (): void => {
		if (inputRef.current) {
			inputRef.current.value = "";
			setUploadedJson(null);
		}
	};

	return (
		<>
			<Card>
				<CardContent>
					<Stack spacing={2}>
						<Stack spacing={2} direction='row' alignItems='center'>
							<Avatar src={user.avatar ?? ""} />
							<Typography>@{user.username ?? ""}</Typography>
						</Stack>
						<Box>
							<Typography>xx followers</Typography>
							<Typography>xx following</Typography>
						</Box>

						<Box>
							<Button>messages</Button>
							<Button>settings</Button>
							<Button>log out</Button>
						</Box>
						<Box>
							{uploadedJson && (
								<Stack spacing={2} justifyContent='space-between'>
									<Typography>json added</Typography>
									<IconButton onClick={handleRemove}>
										<Close />
									</IconButton>
								</Stack>
							)}
							<Button>export to json</Button>
							<Button>import from json</Button>
						</Box>
					</Stack>
				</CardContent>
			</Card>
			<input
				accept='.json'
				type='file'
				onChange={handleChangeInput}
				onClick={handleOpenInput}
				hidden
			/>
		</>
	);
};

export default UserInfo;
