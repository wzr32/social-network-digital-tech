import { ChangeEvent, FC, useRef, useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	IconButton,
	InputBase,
	Stack,
} from "@mui/material";
import {
	AddPhotoAlternate,
	Close,
	LocationOn,
	Search,
} from "@mui/icons-material";

import { createPostService } from "../../services";

const CreatePost: FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [message, setMessage] = useState("");
	// const [showLocationSearch, setShowLocationSearch] = useState<boolean>(false);
	const [images, setImages] = useState<string | null>(null);

	// const handleShowLocation = (): void => {
	// 	setShowLocationSearch((prev) => !prev);
	// };

	const handleClickInput = (): void => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>): void => {
		setMessage(e.target.value);
	};

	const handleChangedInput = (e: ChangeEvent<HTMLInputElement>): void => {
		const files = e.target.files;
		if (!files) return;

		const uri = URL.createObjectURL(files[0]);
		setImages(uri);
	};

	const handleRemove = (): void => {
		if (inputRef.current) {
			inputRef.current.value = "";
		}
		setImages(null);
	};

	const onSubmit = (): void => {
		createPostService({ message, images });
	};

	return (
		<>
			<Card>
				<CardContent>
					<Stack spacing={2}>
						<Box
							sx={{
								background: "#fff",
								color: "#000",
								borderRadius: "18px",
								display: "flex",
								alignItems: "flex-start",
								padding: "5px",
							}}>
							<Avatar sx={{ width: "32px", height: "32px" }} />
							<InputBase
								sx={{ ml: 2, flex: 1, color: "#000" }}
								placeholder='Share something'
								multiline
								maxRows={4}
								onChange={handleChangeMessage}
							/>
							<IconButton
								size='small'
								color='primary'
								sx={{ width: "30px", height: "30px" }}>
								<Search />
							</IconButton>
						</Box>
						{images !== null && (
							<Box
								sx={{
									width: "100px",
									height: "100px",
									borderRadius: "10px",
									position: "relative",
								}}>
								<IconButton
									color='error'
									size='small'
									sx={{ position: "absolute", right: 0 }}
									onClick={handleRemove}>
									<Close fontSize='inherit' color='inherit' />
								</IconButton>
								<img
									src={images}
									alt='preview'
									style={{
										width: "100%",
										height: "100%",
										objectFit: "fill",
										borderRadius: "10px",
									}}
								/>
							</Box>
						)}
						<Stack direction='row' justifyContent='space-between'>
							<Stack direction='row' spacing={1}>
								<Chip
									icon={<AddPhotoAlternate />}
									label='Image'
									onClick={handleClickInput}
									clickable
								/>
								<Chip
									icon={<LocationOn />}
									label='Location'
									// onClick={handleShowLocation}
								/>
							</Stack>
							<Button
								variant='contained'
								size='small'
								onClick={onSubmit}
								disabled={images === null && message.length < 1}>
								send
							</Button>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
			<input
				ref={inputRef}
				type='file'
				accept='.jpg, .png, .jpeg'
				hidden
				onChange={handleChangedInput}
			/>
		</>
	);
};

export default CreatePost;
