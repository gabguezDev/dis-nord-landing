import React from "react";
import {
	Card,
	Box,
	CardContent,
	Typography,
	CardActions,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface PresentationObject {
	href?: string;
	for?: string;
	weight?: string;
	variant?: string;
}

interface IProductCardProps {
	imgSrc: string;
	width: string | number;
	height?: string | number;
	alt?: string;
	description?: string;
	brand?: string;
	hrefWhatsapp?: string;
	addToList?: string;
	variant?: string;
	presentations?: PresentationObject[];
	ingredients?: Object[];
	dailyRation?: string;
}

const ProductCard = ({
	imgSrc,
	width,
	height,
	alt,
	description,
	brand,
	addToList,
	variant,
	presentations,
	ingredients,
	dailyRation,
}: IProductCardProps) => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Card
			sx={{
				width: { xs: "100%" },
				minHeight: "395px",
				maxWidth: 480,
			}}
		>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
					}}
				>
					<Box
						component="img"
						width={width}
						height={height}
						src={imgSrc}
						alt={alt}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							m: 1,
						}}
					/>
					<Box>
						<Typography
							gutterBottom
							variant="h4"
							component="div"
							fontWeight="bold"
							fontFamily="Nunito"
							color="secondary.main"
						>
							{brand}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							textAlign="justify"
						>
							{description}
						</Typography>
						<Typography
							variant="body2"
							color="primary.main"
							fontWeight="bold"
							fontSize={18}
							textAlign="start"
						>
							<br />
							{variant && `Sabor: ${variant}`}
						</Typography>
					</Box>
				</Box>
				<Accordion
					sx={{ zIndex: 10, bgcolor: "secondary.main", color: "white" }}
					TransitionProps={{ unmountOnExit: true }}
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="body1">Presentaciones</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Box
							sx={{
								display: "flex",
								gap: 2,
								flexWrap: "wrap",
							}}
						>
							{presentations?.map((presentation, index) => (
								<Box
									key={`presentation-${index}`}
									sx={{
										display: "flex",
										width: "100%",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Typography variant="body1" whiteSpace="normal" fontSize={20}>
										{presentation.for}
									</Typography>
									<Typography
										variant="body2"
										whiteSpace="nowrap"
										fontWeight="bold"
										fontSize={20}
									>
										{presentation.weight}
									</Typography>
									<Button
										component="a"
										variant="contained"
										startIcon={<WhatsAppIcon />}
										sx={{ px: 3, mx: 1, width: "auto" }}
										href={presentation.href}
										target="_blank"
										rel="norel noreferer"
									>
										<Typography>Pedir</Typography>
									</Button>
								</Box>
							))}
						</Box>
					</AccordionDetails>
				</Accordion>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
