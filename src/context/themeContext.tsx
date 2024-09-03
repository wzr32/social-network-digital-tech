import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

import { darkModeTheme, lightModeTheme } from "@/shared/config/theme";

interface CustomThemeContextType {
	isDark: boolean;
	handleToggleTheme: () => void;
}

interface CustomThemeProviderProps {
	children: ReactNode;
}

export const CustomThemeContext = createContext<CustomThemeContextType>({
	isDark: false,
	/* eslint-disable @typescript-eslint/no-empty-function */
	handleToggleTheme: () => {},
});

const CustomThemeProvider: FC<CustomThemeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState<boolean>(() => {
		const theme = localStorage.getItem("theme");
		return theme === "dark" ? true : false;
	});

	const handleToggleTheme = (): void => {
		setIsDark((prev) => !prev);
		localStorage.setItem("theme", isDark ? "light" : "dark");
	};

	useEffect(() => {
		localStorage.setItem("theme", isDark ? "light" : "dark");
	}, [isDark]);

	return (
		<CustomThemeContext.Provider value={{ isDark, handleToggleTheme }}>
			<ThemeProvider theme={isDark ? darkModeTheme : lightModeTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};

export default CustomThemeProvider;
