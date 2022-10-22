export const styles = {
	container: { maxWidth: "500px", maxHeight: { lg: "500px", xl: "600px" } },
	imgOverText: {
		position: "absolute",
		left: { xs: "0%", md: "50%", lg: "55%" },
		top: { xs: "0%", md: "30%", lg: "25%" },
		fontFamily: "Mulish",
		fontSize: { xs: 22, md: 40 },
		whiteSpace: { xs: "wrap" },
		bgcolor: { xs: "secondary.main", md: "transparent" },
		color: { xs: "white", md: "black" },
		p: 2,
		width: { xs: "100%", md: "50%", lg: "40%" },
		heigth: { xs: "auto" },
	},

	img: {
		objectFit: "cover",
		width: {
			xs: "100%",
			sm: "100%",
			md: "300px",
			lg: "500px",
			height: { xs: "400px", sm: "400px", lg: "500px", xl: "600px" },
		},
	},
};
