import { FC } from "react";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";

import Avatar_1 from "@/assets/dummy/avatars/avatar_1.jpg";
import Avatar_2 from "@/assets/dummy/avatars/avatar_2.jpg";
import Avatar_3 from "@/assets/dummy/avatars/avatar_3.jpg";

const suggestions = [
	{
		name: "Cristy",
		surname: "Waterhouse",
		username: "cwaterhouse6",
		image: Avatar_1,
	},
	{
		name: "Edin",
		surname: "Welham",
		username: "ewelham9",
		image: Avatar_2,
	},
	{
		name: "Georgy",
		surname: "Mahedy",
		username: "gmahedyf",
		image: Avatar_3,
	},
];

const UserSuggestions: FC = () => (
	<Box sx={{ display: { xs: "none", md: "block" } }}>
		<Typography fontWeight='bold' gutterBottom>
			Suggestions
		</Typography>
		<Stack spacing={2}>
			{suggestions.map((person) => (
				<Box
					key={`suggestions__${Math.random()}`}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Stack spacing={3} direction='row' alignItems='center'>
						<Avatar src={person.image} sx={{ width: 40, height: 40 }} />
						<Box>
							<Typography variant='body2'>
								{person.name} {person.surname}
							</Typography>
							<Typography variant='body2' fontWeight='bold'>
								@{person.username}
							</Typography>
						</Box>
					</Stack>
					<Chip clickable label='Follow' />
				</Box>
			))}
		</Stack>
	</Box>
);

export default UserSuggestions;
