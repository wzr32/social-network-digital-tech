import { FC } from "react";
import {
	Avatar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
} from "@mui/material";
import { Wifi as WifiIcon } from "@mui/icons-material";

const UserMenu: FC = () => (
	<Stack spacing={2}>
		<Avatar />
		<List>
			{[...(Array(5) as unknown[])].map((_, index) => (
				<ListItem key={`menu-item__${index}`}>
					<ListItemIcon>
						<WifiIcon />
					</ListItemIcon>
					<ListItemText primary='option' />
				</ListItem>
			))}
		</List>
	</Stack>
);
export default UserMenu;
