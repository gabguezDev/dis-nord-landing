import React from "react";
import { useState } from "react";

const useContactDialogState = () => {
	const [isContactDialogOpen, setIsContactDialogOpen] =
		useState<boolean>(false);

	const handleContactDialogOpen = (isOpen: boolean) => {
		setIsContactDialogOpen(isOpen);
	};

	return { isContactDialogOpen, handleContactDialogOpen };
};

export default useContactDialogState;
