import "../styles/globals.css";
import type { AppProps } from "next/app";
import StandardLayout from "../src/Layouts/StandardLayout/StandardLayout";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<StandardLayout>
				<CssBaseline />
				<Component {...pageProps} />
			</StandardLayout>
		</ThemeProvider>
	);
}

export default MyApp;
