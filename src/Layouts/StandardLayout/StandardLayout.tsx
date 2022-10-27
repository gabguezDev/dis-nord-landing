import React, { ReactNode } from "react";

import Head from "next/head";

import { Box } from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import ContactDialog from "../../containers/ContactDialog/ContactDialog";

import useContactDialogState from "./states/useContactDialogState";

type StandardLayoutProps = {
	children: ReactNode;
};

const StandardLayout = ({ children }: StandardLayoutProps) => {
	const { isContactDialogOpen, handleContactDialogOpen } =
		useContactDialogState();

	return (
		<Box>
			<Head>
				<title>Nordeste Distribuidora </title>
				<meta
					name="Nordeste Distribuidora"
					content="Distribuidora de alimentos balanceados para animales de campo y domésticos."
				/>
			</Head>
			<Navbar
				handleContactDialogOpen={() => handleContactDialogOpen(true)}
				isContactDialogOpen={isContactDialogOpen}
			/>
			<Box>{children}</Box>
			<Footer />
			<ContactDialog
				isContactDialogOpen={isContactDialogOpen}
				onClose={() => handleContactDialogOpen(false)}
			/>
		</Box>
	);
};

export default StandardLayout;
