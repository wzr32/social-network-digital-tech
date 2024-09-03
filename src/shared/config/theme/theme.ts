import { createTheme, responsiveFontSizes } from "@mui/material";

export const darkModeTheme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "#FF7043",
				light: "#FFA270",
				dark: "#C63F17",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#4A90E2",
				light: "#7ABEFF",
				dark: "#005BB5",
				contrastText: "#FFFFFF",
			},
			background: {
				default: "#121212",
				paper: "#1E1E1E",
			},
			text: {
				primary: "#FFFFFF",
				secondary: "#BDBDBD",
				disabled: "#757575",
			},
			error: {
				main: "#F44336",
				contrastText: "#FFFFFF",
			},
			warning: {
				main: "#FF9800",
				contrastText: "#FFFFFF",
			},
			info: {
				main: "#2196F3",
				contrastText: "#FFFFFF",
			},
			success: {
				main: "#4CAF50",
				contrastText: "#FFFFFF",
			},
		},
		typography: {
			fontFamily: "Montserrat, sans-serif",
			h1: {
				fontWeight: 700,
				fontSize: "2rem",
				letterSpacing: "-0.5px",
			},
			h2: {
				fontWeight: 600,
				fontSize: "1.5rem",
				letterSpacing: "-0.5px",
			},
			body1: {
				fontSize: "1rem",
				lineHeight: 1.5,
			},
			button: {
				textTransform: "none",
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 8,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 12,
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
						padding: "8px",
					},
				},
			},
			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: "16px",
						":last-child": {
							paddingBottom: "16px",
						},
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					colorPrimary: {
						backgroundColor: "#1E1E1E",
						color: "#FFFFFF",
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
				main: "#FF7043",
				light: "#FFA270",
				dark: "#C63F17",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#4A90E2",
				light: "#7ABEFF",
				dark: "#005BB5",
				contrastText: "#FFFFFF",
			},
			background: {
				default: "#F4F6F8",
				paper: "#FFFFFF",
			},
			text: {
				primary: "#212121",
				secondary: "#757575",
				disabled: "#BDBDBD",
			},
			error: {
				main: "#F44336",
				contrastText: "#FFFFFF",
			},
			warning: {
				main: "#FF9800",
				contrastText: "#FFFFFF",
			},
			info: {
				main: "#2196F3",
				contrastText: "#FFFFFF",
			},
			success: {
				main: "#4CAF50",
				contrastText: "#FFFFFF",
			},
		},
		typography: {
			fontFamily: "Roboto, Arial, sans-serif",
			h1: {
				fontWeight: 700,
				fontSize: "2rem",
				letterSpacing: "-0.5px",
			},
			h2: {
				fontWeight: 600,
				fontSize: "1.5rem",
				letterSpacing: "-0.5px",
			},
			body1: {
				fontSize: "1rem",
				lineHeight: 1.5,
			},
			button: {
				textTransform: "none",
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 8,
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						borderRadius: 12,
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
						padding: "16px",
					},
				},
			},
			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: "16px",
						":last-child": {
							paddingBottom: "16px",
						},
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					colorPrimary: {
						backgroundColor: "#FFFFFF",
						color: "#212121",
					},
				},
			},
		},
	}),
);
