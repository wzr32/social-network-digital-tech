import { Avatar, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

const SideDrawer: FC = () => (
	<Drawer variant='permanent' sx={{ width: "100%" }}>
		<Avatar />
		<List>
			<ListItem>
				<ListItemText primary='Inbox' />
			</ListItem>
			<ListItem>
				<ListItemText primary='Drafts' />
			</ListItem>
		</List>
	</Drawer>
);
export default SideDrawer;
