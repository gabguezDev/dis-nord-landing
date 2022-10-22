import React from "react";
import type { NextPage } from "next";

import { Box, Typography, Container, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ContactForm from "../../components/ContactForm/ContactForm";
import Advertisement from "../../components/Advertisement/Advertisement";

interface ContactDialogProps {
	isContactDialogOpen: boolean;
	onClose: (dialogOpen: boolean) => void;
}

const ContactDialog = ({ isContactDialogOpen }: ContactDialogProps) => {
	return (
		<Dialog open={isContactDialogOpen}>
			<Box sx={{ m: 3 }}>
				<Box display="flex" alignItems="center">
					<Typography
						variant="h4"
						sx={{ flex: 1, fontFamily: "Nunito", color: "#000" }}
					>
						Contactate con nosotros
					</Typography>
					<IconButton /* onClick={() => onClose(false)} */>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<ContactForm />
				</Box>
			</Box>
			<Advertisement
				bgColor="#e80729"
				height={200}
				text="Hablá directo a nuestro whatsapp"
				buttonText={"Click aquí"}
			/>
		</Dialog>
	);
};

export default ContactDialog;
