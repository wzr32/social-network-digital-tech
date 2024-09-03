import { FC, ReactNode } from "react";
import { Drawer, IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

interface SideDrawerProps {
	open: boolean;
	handleClose: () => void;
	children: ReactNode;
}

const SideDrawer: FC<SideDrawerProps> = ({ children, open, handleClose }) => (
	<Drawer variant='permanent' anchor='left' sx={{ width: "100%" }} open={open}>
		<Stack spacing={6}>
			<Stack spacing={0} direction='row' justifyContent='flex-end'>
				<IconButton onClick={handleClose}>
					<Close />
				</IconButton>
			</Stack>
			{children}
		</Stack>
	</Drawer>
);

export default SideDrawer;
