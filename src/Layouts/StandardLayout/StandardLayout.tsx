import React, { ReactNode } from "react";

import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../containers/Footer/Footer";
import { Box } from "@mui/material";

type StandardLayoutProps = {
	children: ReactNode;
};

const StandardLayout = ({ children }: StandardLayoutProps) => {
	return (
		<Box>
			<Head>
				<title>Nordeste Distribuidora </title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<Navbar isContactDialogOpen={true} />
			<Box>{children}</Box>
			<Footer />
		</Box>
	);
};

export default StandardLayout;
