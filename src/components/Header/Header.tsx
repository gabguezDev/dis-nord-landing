import React from "react";
import { Box } from "@mui/system";
import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import { Typography, Button } from "@mui/material";
import { styles } from "./Header.styles";

const Header = () => {
	return (
		<Box sx={styles.carouselWrapper}>
			<HeaderCarousel />
		</Box>
	);
};

export default Header;
