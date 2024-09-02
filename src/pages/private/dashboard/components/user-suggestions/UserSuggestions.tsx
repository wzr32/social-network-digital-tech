import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { FC } from "react";

const UserSuggestions: FC = () => (
	<Box>
		<Typography fontWeight='bold' gutterBottom>
			Suggestions
		</Typography>
		<Stack spacing={2}>
			{[...(Array(5) as unknown[])].map((_, index) => (
				<Box
					key={`suggestions__${index}`}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Stack spacing={3} direction='row' alignItems='center'>
						<Avatar sx={{ width: 24, height: 24 }} />
						<Box>
							<Typography variant='body2'>ivan</Typography>
							<Typography variant='body2'>shevchenko</Typography>
						</Box>
					</Stack>
					<Chip clickable label='follow' />
				</Box>
			))}
		</Stack>
	</Box>
);
export default UserSuggestions;
