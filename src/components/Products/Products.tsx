import React from "react";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import catProducts from "../../assets/products/cat-products.jpg";
import dogProducts from "../../assets/products/dog-products.jpg";
import rodentsProducts from "../../assets/products/rodents-products.jpg";
import birdsProducts from "../../assets/products/birds-products.jpg";

const Products = () => {
	return (
		<Box
			sx={{
				position: "relative",

				height: "100%",
				width: "100%",

				py: { md: 5 },
				my: { xs: 2 },

				color: "#000",

				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap",

				gap: { xs: 1, md: 3 },
			}}
		>
			<Card
				sx={{
					width: { xs: "100%", md: "40%" },
					borderRadius: 5,
					bgcolor: "#009929",
					height: { xs: "auto" },
				}}
			>
				<CardActionArea href="/products/cats">
					<CardMedia
						component="img"
						image={catProducts.src}
						sx={{
							height: { xs: "300px", sm: "400px" },
							width: { xs: "100%", sm: "100%" },
							objectFit: "cover",
						}}
						alt="gato"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ fontFamily: "Nunito", color: "#fff", fontWeight: 700 }}
						>
							Gatos
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontFamily: "Nunito", color: "#fff" }}
						>
							Hace click acá para ver nuestros productos alimenticios para gatos
							y gatitos.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Card
				sx={{
					width: { xs: "100%", md: "40%" },
					borderRadius: 5,
					bgcolor: "#009929",
					height: { xs: "auto" },
				}}
			>
				<CardActionArea href="/products/dogs">
					<CardMedia
						component="img"
						image={dogProducts.src}
						sx={{
							height: { xs: "300px", sm: "400px" },
							width: { xs: "100%", sm: "100%" },
							objectFit: "cover",
						}}
						alt="perro"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ fontFamily: "Nunito", color: "#fff", fontWeight: 700 }}
						>
							Perros
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontFamily: "Nunito", color: "#fff" }}
						>
							Hace click acá para ver nuestros productos alimenticios para
							cachorros y perros adultos.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Card
				sx={{
					width: { xs: "100%", md: "40%" },
					borderRadius: 5,
					bgcolor: "#009929",
					height: { xs: "auto" },
				}}
			>
				<CardActionArea href="/products/birds">
					<CardMedia
						component="img"
						image={birdsProducts.src}
						sx={{
							height: { xs: "300px", sm: "400px" },
							width: { xs: "100%", sm: "100%" },
							objectFit: "cover",
						}}
						alt="gallina"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ fontFamily: "Nunito", color: "#fff", fontWeight: 700 }}
						>
							Aves
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontFamily: "Nunito", color: "#fff" }}
						>
							Hace click acá para ver nuestros productos alimenticios para
							ponedoras, engordes y recrías.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Card
				sx={{
					width: { xs: "100%", md: "40%" },
					borderRadius: 5,
					bgcolor: "#009929",
					height: { xs: "auto" },
				}}
			>
				<CardActionArea href="/products/others">
					<CardMedia
						component="img"
						image={rodentsProducts.src}
						sx={{
							height: { xs: "300px", sm: "400px" },
							width: { xs: "100%", sm: "100%" },
							objectFit: "cover",
						}}
						alt="conejo"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{ fontFamily: "Nunito", color: "#fff", fontWeight: 700 }}
						>
							Roedores y otros
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontFamily: "Nunito", color: "#fff" }}
						>
							Hace click para ver nuestros productos alimenticios para conejos y
							otras especies.
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default Products;
