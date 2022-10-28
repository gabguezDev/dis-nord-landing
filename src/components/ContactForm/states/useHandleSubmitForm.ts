import { useFormik } from "formik";
import React from "react";

const useHandleSubmitForm = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			lastName: "",
			dialCode: "",
			contactNumber: "",
			reason: "",
			message: "",
		},
		/* validationSchema: validationSchema, */
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return { formik };
};

export default useHandleSubmitForm;
