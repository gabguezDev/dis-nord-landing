import React from "react";

import { Box, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

import ProductCard from "../../../components/ProductCard/ProductCard";

import { stock } from "../../../constraints/stock";

const CatsProducts = () => {
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
					Gatos y Gatitos
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
				{stock.catsProducts.map((catProduct, index) => (
					<>
						<ProductCard
							imgSrc={catProduct.imgSrc}
							width={"200px"}
							height={"auto"}
							alt={""}
							description={catProduct.description}
							brand={catProduct.name}
							addToList={""}
							presentations={catProduct.presentations}
							ingredients={[""]}
							dailyRation={""}
							variant={catProduct.variant}
						/>
						;
					</>
				))}
			</Box>
		</Box>
	);
};

export default CatsProducts;
