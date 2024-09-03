import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import CustomThemeProvider from "./context/themeContext";

import { Router } from "@/router";

const App = () => (
	<BrowserRouter>
		<CustomThemeProvider>
			<Toaster />
			<Router />
		</CustomThemeProvider>
	</BrowserRouter>
);

export default App;
