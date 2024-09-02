import { FC } from "react";
import { Close, Favorite, LocationOn } from "@mui/icons-material";
import {
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
	likes,
	location,
	message,
}) => (
	<Dialog open={show} maxWidth='md' fullWidth>
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
				<Stack spacing={2} direction='row' alignItems='center'>
					<Typography>{author?.username ?? ""}</Typography>
					<Typography>
						{created_at !== undefined
							? new Date(created_at).toLocaleDateString("ES-es").toString()
							: ""}
					</Typography>
				</Stack>

				<Typography>{message}</Typography>

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
