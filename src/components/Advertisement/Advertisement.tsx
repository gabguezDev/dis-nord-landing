import React from "react";

import { Typography, Button, Box } from "@mui/material";
import WhatsApp from "@mui/icons-material/WhatsApp";

import { styles } from "./Advertisement.styles";

interface AdvertisementProps {
	text: string;
	buttonText: string;
	reflex?: boolean;
	bgColor: string;
	href?: string;
	height: number;
}

const Advertisement = ({
	text,
	buttonText,
	reflex,
	bgColor,
	height,
	href,
}: AdvertisementProps) => {
	return (
		<Box
			sx={{
				...styles.container,
				bgcolor: bgColor,
				height: height,
				...(reflex && { flexDirection: "row-reverse" }),
			}}
		>
			<Typography sx={styles.adText}>{text}</Typography>
			<Button
				component="a"
				variant="contained"
				color="primary"
				target="_blank"
				rel="noopener noreferrer"
				href="https://wa.me/5493704279085?text=¡Hola!%20Quisiera%20hacer%20hacer%20una%20consulta..."
				startIcon={<WhatsApp sx={styles.iconButton} />}
			>
				{buttonText}
			</Button>
		</Box>
	);
};

export default Advertisement;
