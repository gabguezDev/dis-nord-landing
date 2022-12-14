import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useLoading = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url: string) =>
			url !== router.asPath && setIsLoading(true);
		const handleComplete = (url: string) =>
			url === router.asPath && setIsLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);
		};
	});

	return isLoading;
};

export default useLoading;
