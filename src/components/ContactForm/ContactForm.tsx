import React from "react";
import { Button } from "@mui/material";
import {
	Box,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

type Props = {};

const ContactForm = () => {
	return (
		<Box
			component="form"
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				my: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					gap: 3,
				}}
			>
				<TextField
					variant="standard"
					helperText="Ingresa sólo tu nombre"
					id="firstName"
					label="Nombre"
				/>

				<TextField
					variant="standard"
					helperText="Ingresa sólo tu apellido"
					id="lastName"
					label="Apellido"
				/>
			</Box>

			<FormControl variant="standard" fullWidth>
				<InputLabel id="demo-simple-select-label">
					¿Cuál es tu motivo de contacto?
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					//value={age}
					label="Age"
					//onChange={handleChange}
				>
					<MenuItem value={10}>Compra minorista</MenuItem>
					<MenuItem value={10}>Compra mayorista</MenuItem>
					<MenuItem value={10}>Soy proveedor</MenuItem>
				</Select>
			</FormControl>

			<TextField
				variant="standard"
				helperText="Ingresa tu número de teléfono"
				id="phoneNumber"
				label="Número de teléfono de contacto"
			/>

			<TextField
				placeholder="Escribe aquí tu consulta o mensaje (opcional)"
				multiline
				rows={2}
				maxRows={5}
			/>

			<Button variant="contained" sx={{ height: "50px", bgcolor: "#009929" }}>
				Enviar
			</Button>
		</Box>
	);
};

export default ContactForm;
