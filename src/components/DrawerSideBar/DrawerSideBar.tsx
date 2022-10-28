import React from "react";
import { Drawer, Button, Hidden, Box } from "@mui/material";
import { styles } from "./DrawerSideBar.styles";

interface IDrawerProps {
	isOpen: boolean;
	handleContactDialogOpen: () => void;
	isContactDialogOpen: boolean;
	onCloseDrawer: () => void;
	actualPath: string;
}

const DrawerSideBar = ({
	actualPath,
	isOpen,
	handleContactDialogOpen,
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
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/products/dogs`}
				>
					Perros
				</Button>
				<Button
					sx={{
						...styles.link,
						...(actualPath ===
						`${process.env.NEXT_PUBLIC_BASE_PATH}/products/cats`
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
						...(actualPath ===
						`${process.env.NEXT_PUBLIC_BASE_PATH}/products/birds`
							? { ...styles.actualLink }
							: { ...styles.notActualLink }),
					}}
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/products/birds`}
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
					href={`${process.env.NEXT_PUBLIC_BASE_PATH}/products/others`}
				>
					Otros
				</Button>
				<Hidden mdUp>
					<Button
						onClick={() => handleContactDialogOpen(true)}
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
							...(actualPath === `${process.env.NEXT_PUBLIC_BASE_PATH}/about`
								? { ...styles.actualLink }
								: { ...styles.notActualLink }),
						}}
						href={`${process.env.NEXT_PUBLIC_BASE_PATH}/about`}
					>
						Nosotros
					</Button>
				</Hidden>
			</Box>
		</Drawer>
	);
};

export default DrawerSideBar;
