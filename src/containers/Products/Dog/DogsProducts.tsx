import React from "react";

import { Box, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

import ProductCard from "../../../components/ProductCard/ProductCard";

import { stock } from "../../../constraints/stock";

const DogsProducts = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					bgcolor: "secondary.main",
					width: "100%",
					display: "flex",
					alignItems: "center",
					px: 2,
				}}
			>
				<PetsIcon fontSize="large" />
				<Typography variant="h3" mx={1} color="white">
					Perros y cachorros
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: { xs: "center", md: "start" },
					flexDirection: { xs: "column", md: "row" },
					flexWrap: "wrap",
					gap: 3,
					p: 2,
				}}
			>
				{stock.dogsProducts.map((dogProduct, index) => (
					<>
						<ProductCard
							imgSrc={dogProduct.imgSrc}
							width={"200px"}
							height={"300px"}
							alt={""}
							description={dogProduct.description}
							brand={dogProduct.name}
							addToList={""}
							presentations={dogProduct.presentations}
							ingredients={[""]}
							dailyRation={""}
							variant={dogProduct.variant}
						/>
						;
					</>
				))}
			</Box>
		</Box>
	);
};

export default DogsProducts;
