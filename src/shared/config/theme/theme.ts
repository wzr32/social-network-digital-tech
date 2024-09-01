import { createTheme, responsiveFontSizes } from "@mui/material";

export const darkModeTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "#90caf9",
			},
			secondary: {
				main: "#f48fb1",
			},
			background: {
				default: "#121212",
				paper: "#1e1e1e",
			},
			text: {
				primary: "#e0e0e0",
				secondary: "#bdbdbd",
			},
		},
		typography: {
			fontFamily: "Montserrat, sans-serif",
		},
		components: {
			MuiCardContent: {
				styleOverrides: {
					root: {
						paddingBottom: "16px",
						padding: "16px 16px",
					},
				},
			},
		},
	}),
);

export const lightModeTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#1976d2",
			},
			secondary: {
				main: "#ff4081",
			},
			background: {
				default: "#f5f5f5",
				paper: "#ffffff",
			},
			text: {
				primary: "#212121",
				secondary: "#757575",
			},
		},
		typography: {
			fontFamily: "Montserrat, sans-serif",
		},
		components: {
			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: "16px",
					},
				},
			},
		},
	}),
);
