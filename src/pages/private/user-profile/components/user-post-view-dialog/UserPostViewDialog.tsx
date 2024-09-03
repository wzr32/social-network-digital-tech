import { FC } from "react";
import { Close, Favorite, LocationOn } from "@mui/icons-material";
import {
	Box,
	Chip,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";

import { Post } from "@/types";

interface UserPostViewDialogProps extends Partial<Post> {
	show: boolean;
	onClose: () => void;
}

const UserPostViewDialog: FC<UserPostViewDialogProps> = ({
	show,
	onClose,
	author,
	created_at,
	id,
	images,
	likes,
	location,
	message,
}) => (
	<Dialog open={show} maxWidth='sm' fullWidth>
		<DialogTitle>
			<Stack
				spacing={2}
				direction='row'
				justifyContent='space-between'
				alignItems='center'>
				<Typography variant='h6'>Post</Typography>
				<IconButton onClick={onClose}>
					<Close color='error' />
				</IconButton>
			</Stack>
		</DialogTitle>
		<DialogContent>
			<Stack spacing={2}>
				<Stack
					spacing={2}
					direction='row'
					alignItems='center'
					justifyContent='space-between'>
					<Typography>@{author?.username ?? ""}</Typography>
					<Typography>
						{created_at !== undefined
							? new Date(created_at).toLocaleDateString("ES-es").toString()
							: ""}
					</Typography>
				</Stack>

				<Typography>{message}</Typography>
				{images && (
					<Box sx={{ height: "200px" }}>
						<img
							src={images ?? ""}
							alt={id}
							style={{ objectFit: "contain", width: "100%", height: "100%" }}
						/>
					</Box>
				)}

				<Stack
					direction='row'
					gap='10px'
					flexWrap='wrap'
					justifyContent='flex-end'>
					<Chip
						label={`${likes !== undefined ? likes.length : ""} ${likes !== undefined && likes.length > 0 ? "likes" : "like"}`}
						icon={<Favorite />}
					/>
					{location && <Chip label={location} icon={<LocationOn />} />}
				</Stack>
			</Stack>
		</DialogContent>
	</Dialog>
);
export default UserPostViewDialog;
