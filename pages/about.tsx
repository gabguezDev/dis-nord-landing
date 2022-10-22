import React from "react";

import type { NextPage } from "next";

import { Box, Typography, Container } from "@mui/material";

import formosaSvg from "../src/assets/formosa-mapa-verde.svg";
import argentinaFlag from "../src/assets/argentina-flag.svg";
import Advertisement from "../src/components/Advertisement/Advertisement";

const About: NextPage = () => {
	return (
		<Container sx={{ width: "100%", p: 5 }}>
			<Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Box position="relative">
						<Box
							component="img"
							src={formosaSvg.src}
							sx={{ width: { xs: "120px", lg: "200px" }, mx: { lg: 1 } }}
						/>
						<Box
							component="img"
							src={argentinaFlag.src}
							sx={{
								position: "absolute",
								left: { xs: "30px", lg: "50px" },
								top: { xs: "35px", lg: "50px" },
								width: { xs: "50px", lg: "90px" },
							}}
							height="auto"
						/>
					</Box>
					<Typography
						sx={{
							color: "primary.main",
							fontFamily: "Mulish",
							fontWeight: 900,
							fontSize: { xs: 30, lg: 50 },
						}}
					>
						Nordeste
						<br />
						Distribuidora
					</Typography>
				</Box>
				<Typography
					sx={{
						fontSize: { xs: 13, md: 16 },
						color: "#000",
						fontFamily: "Mulish",
						textAlign: "justify",
						m: { xs: 0.5, lg: 3 },
					}}
				>
					<strong>Acompañamos a las familias formoseñas desde 2004. </strong>
					<br />
					<br />
					Distribuimos alimentos balanceados para animales domésticos y animales
					de campo en toda la Provincia de Formosa.
					<br />
					<br />
					<strong>Realizamos envíos</strong> y contamos con{" "}
					<strong>subdistribuidores</strong> en distintos barrios de la Ciudad
					de Formosa y localidades del Interior.
					<br />
					<br />
					Contamos con <strong>stock constante</strong> y{" "}
					<strong>trabajamos tambien con alimentos a pedido</strong> para
					satisfacer la demanda que el cliente requiera.
					<br />
					<br />
					Siempre comercializando productos de <strong>alta calidad</strong>,
					brindamos a nuestros clientes la <strong>satisfacción</strong> de
					consumir y vender productos con alto grado de nutrición para los
					animales.
					<br />
					<br />
					Pueden encontrarnos en <strong>Avenida Gutniski n° 4480</strong>, al
					lado del Círculo de Sub Oficiales de la Provincia de Formosa.
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					p: { xs: 0, md: 3 },
				}}
			>
				<Box
					component="iframe"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9511445584444!2d-58.21352639999999!3d-26.1982675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945caf3509a0ec91%3A0xd6da83587ce9018f!2sAv.%20Arturo%20Illia%204480%2C%20Formosa!5e0!3m2!1ses!2sar!4v1665939401380!5m2!1ses!2sar"
					sx={{ width: { xs: "100%", md: "80%" }, my: 1 }}
					height={300}
				/>
			</Box>

			<Advertisement
				bgColor="#e80729"
				height={260}
				text="Pongámonos en contacto"
				buttonText="Hacé click acá"
				href="https://wa.me/5493704279085?text=¡Hola!%20Quisiera%20hacer%20hacer%20una%20consulta..."
			/>
		</Container>
	);
};

export default About;
