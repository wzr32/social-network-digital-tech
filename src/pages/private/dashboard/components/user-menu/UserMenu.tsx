import { FC } from "react";
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import {
	Feed as FeedIcon,
	Forum as ForumIcon,
	PeopleAlt as PeopleAltIcon,
	Settings as SettingsIcon,
} from "@mui/icons-material";

const menuItems = [
	{
		icon: FeedIcon,
		text: "News Feed",
		path: "/",
	},
	{
		icon: ForumIcon,
		text: "Messages",
		path: "/",
	},
	{
		icon: PeopleAltIcon,
		text: "Friends",
		path: "/",
	},
	{
		icon: SettingsIcon,
		text: "Settings",
		path: "/",
	},
];

const UserMenu: FC = () => (
	<Box>
		<Stack spacing={2} alignItems='center' justifyContent='center'>
			<Box
				sx={{
					display: "inherit",
					flexDirection: "inherit",
					alignItems: "inherit",
					gap: "10px",
				}}>
				<Avatar sx={{ width: "60px", height: "60px" }} />
				<Typography variant='h6'>@User Name</Typography>
			</Box>
			<List sx={{ width: "100%" }}>
				{menuItems.map((opts) => {
					const Icon = opts.icon;
					return (
						<ListItem key={`menu-item__${Math.random()}`}>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={opts.text} />
						</ListItem>
					);
				})}
			</List>
		</Stack>
	</Box>
);

export default UserMenu;
