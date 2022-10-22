import React from "react";

import { Box, Typography, Button, Tooltip } from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
	return (
		<Box
			sx={{
				position: "relative",
				bottom: "0px",

				width: "100%",

				color: "#000",
				bgcolor: "#009929",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: { xs: "start", md: "center" },
					p: { xs: 2.8, md: 4 },
					overflowX: "hidden",
					gap: { xs: 2, lg: 4 },
					flexDirection: { xs: "column", lg: "row" },
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: { xs: "column", md: "row" },
					}}
				>
					<Typography
						sx={{
							fontFamily: "Nunito",
							fontWeight: 600,
							color: "#fff",
							whiteSpace: { xs: "wrap", xl: "noWrap" },
						}}
					>
						Nordeste Distribuidora. Formosa, Argentina.
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "start",
						flexDirection: "column",
					}}
				>
					<Button
						startIcon={<LocalPhoneIcon />}
						sx={{
							fontFamily: "Nunito",
							fontSize: { xs: 15 },
							fontWeight: 600,
							color: "#fff",
							"&:hover": {
								color: "#f5e1ce",
							},
						}}
					>
						+54 370 15 4 279 085
					</Button>
					<Button
						target="_blank"
						rel="noopener noreferrer"
						href="https://wa.me/5493704279085?text=¡Hola!%20Quisiera%20hacer%20hacer%20una%20consulta..."
						startIcon={<WhatsAppIcon />}
						sx={{
							fontFamily: "Nunito",
							fontSize: { xs: 15 },
							fontWeight: 600,
							color: "#fff",
							"&:hover": {
								color: "#f5e1ce",
							},
						}}
					>
						+54 370 15 4 279 085
					</Button>
					<Button
						startIcon={<EmailIcon />}
						sx={{
							fontFamily: "Nunito",
							fontSize: { xs: 15 },
							fontWeight: 600,
							color: "#fff",
							"&:hover": {
								color: "#f5e1ce",
							},
						}}
						href="mailto:distribuidoranordeste@gmail.com"
					>
						nordeste.distribuidora@gmail.com
					</Button>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "start",
						flexDirection: "column",
					}}
				>
					<Tooltip
						components={{ Tooltip: "div" }}
						title={
							<Box p={0.25} sx={{ bgcolor: "#f5e1ce", borderRadius: 2 }}>
								<Typography
									m={1}
									sx={{
										fontFamily: "mulish",
										bgcolor: "#f5e1ce",
										color: "#000",
										fontSize: 14,
									}}
								>
									Al lado del Círculo de Sub Oficiales de la Provincia de
									Formosa.
								</Typography>
							</Box>
						}
					>
						<Button
							startIcon={<LocationOnIcon />}
							sx={{
								fontFamily: "Nunito",
								fontWeight: 600,
								fontSize: { xs: 15 },
								color: "#fff",
								whiteSpace: { xs: "wrap", md: "noWrap" },
								"&:hover": {
									color: "#f5e1ce",
								},
							}}
							href="https://goo.gl/maps/yZ9edspqfnicmHCW7"
						>
							Avenida Gutniski N° 4480. Formosa, Argentina.
							{/* 	<Typography>
							(Al lado del Circulo de Suboficiales de la Provincia de Formosa)
						</Typography> */}
						</Button>
					</Tooltip>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
