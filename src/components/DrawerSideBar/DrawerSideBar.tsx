import React from "react";
import { Drawer, Button, Hidden, Box } from "@mui/material";
import { styles } from "./DrawerSideBar.styles";

interface IDrawerProps {
	isOpen: boolean;
	isContactDialogOpen: boolean;
	onCloseDrawer: () => void;
	actualPath: string;
}

const DrawerSideBar = ({
	actualPath,
	isOpen,
	isContactDialogOpen,
	onCloseDrawer,
}: IDrawerProps) => {
	return (
		<Drawer
			anchor={"left"}
			open={isOpen}
			PaperProps={{ sx: styles.drawerPaper }}
			onClose={() => onCloseDrawer()}
		>
			<Box sx={styles.linksWrapper}>
				<Button
					sx={{
						...styles.link,
						...(actualPath === "/"
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href="/"
				>
					Inicio
				</Button>
				<Button
					sx={{
						...styles.link,
						...(actualPath === "/products/dogs"
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href="/products/dogs"
				>
					Perros
				</Button>
				<Button
					sx={{
						...styles.link,
						...(actualPath === "/products/cats"
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href="/products/cats"
				>
					Gatos
				</Button>
				<Button
					sx={{
						...styles.link,
						...(actualPath === "/products/birds"
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href="/products/birds"
				>
					Aves
				</Button>
				<Button
					sx={{
						...styles.link,
						...(actualPath === "/products/others"
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href="/products/others"
				>
					Otros
				</Button>
				<Hidden mdUp>
					<Button
						sx={{
							...styles.link,
							...(isContactDialogOpen
								? { ...styles.actualLink }
								: { ...styles.notActualLink }),
						}}
					>
						Contacto
					</Button>
					<Button
						sx={{
							...styles.link,
							...(actualPath === "/about"
								? { ...styles.actualLink }
								: { ...styles.notActualLink }),
						}}
						href="/about"
					>
						Nosotros
					</Button>
				</Hidden>
			</Box>
		</Drawer>
	);
};

export default DrawerSideBar;
