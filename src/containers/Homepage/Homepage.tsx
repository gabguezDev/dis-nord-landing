import { Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Products from "../../components/Products/Products";
import Advertisement from "../../components/Advertisement/Advertisement";
import { Box } from "@mui/system";

const Homepage = () => {
	return (
		<>
			<Advertisement
				height={100}
				bgColor="#efa229"
				text="Venta minorista y mayorista"
				buttonText="Hacé tu pedido"
			/>
			<Container maxWidth="xl">
				<Header />
				<Advertisement
					height={200}
					bgColor="#e80729"
					text="¿Querés ser subdistribuidor? ¡Te estamos buscando!"
					buttonText="Contactate"
				/>
				<Brands />
				<Products />
				<Advertisement
					height={200}
					bgColor="#e80729"
					reflex={true}
					text="¿Sos proveedor? ¡Contactate con nosotros!"
					buttonText="Contactate"
				/>
			</Container>
		</>
	);
};

export default Homepage;
