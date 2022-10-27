import React from "react";
import type { NextPage } from "next";

import { Box, Typography, Container, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ContactForm from "../../components/ContactForm/ContactForm";
import Advertisement from "../../components/Advertisement/Advertisement";
import { styles } from "./ContactDialog.styles";

interface ContactDialogProps {
	isContactDialogOpen: boolean;
	onClose: (dialogOpen: boolean) => void;
}

const ContactDialog = ({
	isContactDialogOpen,
	onClose,
}: ContactDialogProps) => {
	return (
		<Dialog open={isContactDialogOpen}>
			<Box sx={styles.innerDialogContainer}>
				<Box display="flex" alignItems="center">
					<Typography
						variant="h4"
						sx={styles.dialogTitle}
					>
						Contactate con nosotros
					</Typography>
					<IconButton /* onClick={() => onClose(false)} */>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box
					sx={styles.contactFormWrapper}
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
