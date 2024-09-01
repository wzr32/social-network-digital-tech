import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { Router } from "./router";
import { darkModeTheme } from "./shared/config/theme/theme";

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={darkModeTheme}>
			<Router />
		</ThemeProvider>
	</BrowserRouter>
);
export default App;
