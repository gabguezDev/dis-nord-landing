import React from "react";

import { Box, Typography } from "@mui/material";
import ProductCard from "../../../components/ProductCard/ProductCard";

const OtherProducts = () => {
	return (
		<Box>
			<Box sx={{ bgcolor: "secondary.main", width: "100%" }}>
				<Typography variant="h2" mx={3} color="white">
					Otros
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: { xs: "column", md: "row" },
					flexWrap: "wrap",
					gap: 3,
				}}
			>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</Box>
		</Box>
	);
};

export default OtherProducts;
