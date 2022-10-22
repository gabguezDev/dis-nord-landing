export const styles = {
	drawerPaper: { bgcolor: "rgba(0,153,41, 1)" },

	linksWrapper: {
		display: "flex",
		flexDirection: "column",
		px: "3rem",
	},

	link: {
		my: 1,
		fontSize: { md: 18, lg: 20 },
		fontFamily: "Mulish",
		textAlign: "left",
	},

	actualLink: {
		color: "#F5E1CE",
		textDecoration: "underline",
		textDecorationColor: "#F5E1CE",
		textUnderlineOffset: "5px",
	},

	notActualLink: {
		color: "white",
		"&:hover": {
			color: "#F5E1CE",
			textDecoration: "underline",
			textUnderlineOffset: "5px",
		},
	},
};
