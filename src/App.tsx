import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

import { Router } from "@/router";
import { darkModeTheme } from "@/shared/config/theme";

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={darkModeTheme}>
			<CssBaseline />
			<Toaster />
			<Router />
		</ThemeProvider>
	</BrowserRouter>
);
export default App;
