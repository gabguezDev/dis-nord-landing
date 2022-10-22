import React, { FC } from "react";
import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Typography,
	Box,
	Hidden,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { useRouter } from "next/router";
import formosaMapSvg from "../../assets/formosa-mapa-verde.svg";
import argentinaFlag from "../../assets/argentina-flag.svg";
import DrawerSideBar from "../DrawerSideBar/DrawerSideBar";
import useDrawer from "./states/useDrawer";

interface NavbarProps {
	isContactDialogOpen: boolean;
}

const Navbar: FC<NavbarProps> = ({ isContactDialogOpen }: NavbarProps) => {
	const router = useRouter();

	const actualPath = router.pathname;

	const { isDrawerOpen, handleDrawerOpen } = useDrawer();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
				<Toolbar sx={{ display: "flex", justifyContent: { xs: "center" } }}>
					<Hidden lgUp>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleDrawerOpen}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Box position="relative">
						<Box
							component="img"
							src={formosaMapSvg.src}
							height="60px"
							width="80px"
							mx={1}
						/>
						<Box
							component="img"
							src={argentinaFlag.src}
							sx={{ position: "absolute", left: "30%", top: "20%" }}
							width="40px"
							height="auto"
						/>
					</Box>
					<Link href="/">
						<Typography
							variant="h6"
							component="div"
							sx={{
								fontFamily: "Mulish",
								flexGrow: 1,
								"&:hover": { cursor: "pointer" },
								textAlign: "start",
							}}
						>
							Nordeste <br /> Distribuidora
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
						<Button
							//onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								fontSize: { lg: 20 },
								fontFamily: "Mulish",
								...(actualPath === "/"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/"
						>
							Inicio
						</Button>
						<Button
							//onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								fontSize: { lg: 20 },
								fontFamily: "Mulish",
								...(actualPath === "/products/dogs"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/products/dogs"
						>
							Perros
						</Button>
						<Button
							//onClick={handleCloseNavMenu}

							sx={{
								m: 2,
								fontSize: { lg: 20 },
								fontFamily: "Mulish",

								...(actualPath === "/products/cats"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/products/cats"
						>
							Gatos
						</Button>
						<Button
							//onClick={handleCloseNavMenu}

							sx={{
								my: 2,
								fontSize: { lg: 20 },
								fontFamily: "Mulish",
								...(actualPath === "/products/birds"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/products/birds"
						>
							Aves
						</Button>
						<Button
							//onClick={handleCloseNavMenu}

							sx={{
								my: 2,
								fontSize: { lg: 20 },
								fontFamily: "Mulish",

								...(actualPath === "/products/others"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/products/others"
						>
							Otros
						</Button>
					</Box>

					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Button
							//onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								fontSize: { md: 18, lg: 20 },
								fontFamily: "Mulish",
								...(isContactDialogOpen
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
						>
							Contacto
						</Button>
						<Button
							//onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								fontSize: { md: 18, lg: 20 },
								fontFamily: "Mulish",

								...(actualPath === "/about"
									? {
											color: "#F5E1CE",
											textDecoration: "underline",
											textDecorationColor: "#F5E1CE",
											textUnderlineOffset: "5px",
									  }
									: {
											color: "white",
											"&:hover": {
												color: "#F5E1CE",
												textDecoration: "underline",
												textUnderlineOffset: "5px",
											},
									  }),
							}}
							href="/about"
						>
							Nosotros
						</Button>
					</Box>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
			<DrawerSideBar
				actualPath="/"
				isOpen={isDrawerOpen}
				isContactDialogOpen={false}
				onCloseDrawer={handleDrawerOpen}
			/>
		</Box>
	);
};

export default Navbar;