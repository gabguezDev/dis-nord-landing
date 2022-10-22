import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

const palette = {
	primary: {
		main: "#009929",
	},
	secondary: {
		main: "#e80729",
	},
};

const customBreakpoints = {
	values: {
		xs: 320,
		sm: 480,
		md: 768,
		lg: 1024,
		xl: 1200,
	},
};

// Create a theme instance.
const theme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: {
			xs: customBreakpoints.values.xs,
			sm: customBreakpoints.values.sm,
			md: customBreakpoints.values.md,
			lg: customBreakpoints.values.lg,
			xl: customBreakpoints.values.xl,
		},
	},
	palette: {
		primary: {
			main: palette.primary.main,
		},
		secondary: {
			main: palette.secondary.main,
		},
	},
	typography: {
		fontFamily: ["Nunito", "Mulish", "-apple-system", "sans-serif"].join(","),
		button: {
			fontFamily: "Mulish",
			"@media (min-width:320px)": {
				fontSize: 18,
			},
			"@media (min-width:480px)": {
				fontSize: 20,
			},
			"@media (min-width:768px)": {
				fontSize: 25,
			},
			"@media (min-width:1024px)": {
				fontSize: 30,
			},
		},
	},
	components: {
		MuiButton: {
			defaultProps: { disableRipple: true },
			styleOverrides: {
				root: {
					borderRadius: 10,
					textTransform: "none", // removes uppercase transformation
				},
				containedPrimary: {
					bgcolor: palette.secondary.main,

					fontFamily: "Nunito",

					"&:hover": {
						bgcolor: "#ef2947",
					},
				},

				containedSecondary: {
					fontWeight: 700, // makes text bold
				},
			},
		},
	},
});

export default theme;
