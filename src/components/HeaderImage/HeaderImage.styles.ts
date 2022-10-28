export const styles = {
	container: {
		maxHeight: { xs: "auto", lg: "500px" },
		display: "flex",
		flexDirection: { xs: "column", md: "row-reverse" },
		justifyContent: "center",
	},

	imgOverText: {
		fontFamily: "Mulish",
		fontSize: { xs: 22, md: 40 },
		bgcolor: { xs: "secondary.main", md: "transparent" },
		color: { xs: "white", md: "black" },
		p: 2,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: { xs: "100%", md: "100%", lg: "40%" },
		height: { xs: "100px", sm: "50px", md: "auto" },
	},

	img: {
		objectFit: "cover",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: { xs: "auto", md: "50%", lg: "auto" },
		height: { xs: "350px", sm: "400px", md: "500px" },
	},
};
