import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { styles } from "./HeaderImage.styles";

interface HeaderImageProps {
	imgSrc?: string;
	imgOverText?: string;
	objectPosition?: string;
}

const HeaderImage = ({
	imgSrc,
	imgOverText,
	objectPosition,
}: HeaderImageProps) => {
	return (
		<Box sx={styles.container}>
			<Typography sx={styles.imgOverText}>{imgOverText}</Typography>
			<Box component="img" src={imgSrc} sx={styles.img} />
		</Box>
	);
};

export default HeaderImage;
