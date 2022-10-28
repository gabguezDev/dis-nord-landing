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
import useHandleSubmitForm from "./states/useHandleSubmitForm";

const ContactForm = () => {
	const { formik } = useHandleSubmitForm();

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
				sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
			>
				<TextField
					variant="standard"
					helperText="Ingresa sólo tu nombre"
					id="name"
					label="Nombre"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>

				<TextField
					variant="standard"
					helperText="Ingresa sólo tu apellido"
					id="lastName"
					label="Apellido"
					value={formik.values.lastName}
					onChange={formik.handleChange}
				/>
			</Box>

			<FormControl variant="standard" fullWidth>
				<InputLabel id="reason">¿Cuál es tu motivo de contacto?</InputLabel>
				<Select
					id="reason"
					label="reason"
					name="reason"
					value={formik.values.reason}
					onChange={formik.handleChange}
				>
					<MenuItem value={"Compra minorista"}>Compra minorista</MenuItem>
					<MenuItem value={"Compra mayorista"}>Compra mayorista</MenuItem>
					<MenuItem value={"Soy proveedor"}>Soy proveedor</MenuItem>
				</Select>
			</FormControl>

			<Box
				sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
			>
				<TextField
					variant="standard"
					helperText={
						<>
							Ingresa el código de área.
							<br /> Ej: 0370 o 011
						</>
					}
					id="dialCode"
					name="dialCode"
					label="Código de área"
					value={formik.values.dialCode}
					onChange={formik.handleChange}
				/>
				<TextField
					variant="standard"
					helperText={
						<>
							Ingresa tu número de teléfono.
							<br /> Ej: 154123456
						</>
					}
					id="contactNumber"
					name="contactNumber"
					label="Número de teléfono"
					value={formik.values.contactNumber}
					onChange={formik.handleChange}
				/>
			</Box>

			<TextField
				placeholder="Escribe aquí tu consulta o mensaje (opcional)"
				name="message"
				multiline
				rows={2}
				maxRows={5}
				value={formik.values.message}
				onChange={formik.handleChange}
			/>

			<Button variant="contained" sx={{ height: "50px", bgcolor: "#009929" }}>
				Enviar
			</Button>
		</Box>
	);
};

export default ContactForm;
