import { FC, useState } from "react";
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemButton,
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
import { NavLink, useNavigate } from "react-router-dom";

import { useStore } from "@/store";
import { PrivateRoutes } from "@/models";

const menuItems = [
	{
		icon: FeedIcon,
		text: "News Feed",
	},
	{
		icon: ForumIcon,
		text: "Messages",
	},
	{
		icon: PeopleAltIcon,
		text: "Friends",
	},
	{
		icon: SettingsIcon,
		text: "Settings",
	},
];

const UserMenu: FC = () => {
	const { user } = useStore();
	const navigate = useNavigate();

	const [selected, setSelected] = useState("News Feed");

	const handleSelect = (text: string): void => {
		if (text === "News Feed") {
			navigate(PrivateRoutes.DASHBOARD);
		}
		setSelected(text);
	};

	return (
		<Box sx={{ margin: "0 auto" }}>
			<Stack spacing={2} alignItems='center' justifyContent='center'>
				<Box
					sx={{
						display: "inherit",
						flexDirection: "inherit",
						alignItems: "inherit",
						gap: "10px",
					}}>
					<Avatar
						sx={{ width: "60px", height: "60px" }}
						src={user?.avatar ?? ""}
					/>
					<NavLink
						to={PrivateRoutes.USER_PROFILE}
						style={{ textDecoration: "none" }}>
						<Typography variant='h6' fontWeight='bold' color='secondary.dark'>
							@{user?.username}
						</Typography>
					</NavLink>
				</Box>
				<List sx={{ width: "100%" }}>
					{menuItems.map((opts) => {
						const Icon = opts.icon;
						return (
							<ListItem key={`menu-item__${Math.random()}`}>
								<ListItemButton
									onClick={() => handleSelect(opts.text)}
									sx={{
										bgcolor: selected === opts.text ? "primary.main" : "",
										color:
											selected === opts.text ? "primary.contrastText" : "paper",
										borderRadius: "12px",
										"&:hover": {
											bgcolor: "primary.light",
											color: "primary.contrastText",
										},
									}}>
									<ListItemIcon>
										<Icon
											sx={{
												color:
													selected === opts.text
														? "primary.contrastText"
														: "paper",
											}}
										/>
									</ListItemIcon>
									<ListItemText primary={opts.text} />
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>
			</Stack>
		</Box>
	);
};

export default UserMenu;
