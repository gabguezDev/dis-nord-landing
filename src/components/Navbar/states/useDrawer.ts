import React from "react";
import { useState } from "react";

type Props = {};

const useDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const handleDrawerOpen = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return { isDrawerOpen, handleDrawerOpen };
};

export default useDrawer;
