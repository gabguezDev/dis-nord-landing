import type { NextPage } from "next";
import Image from "next/image";
import Homepage from "../src/containers/Homepage/Homepage";
import Contact from "../src/containers/ContactDialog/ContactDialog";

const Home: NextPage = () => {
	return (
		<>
			<Homepage />
			<Contact />
		</>
	);
};

export default Home;
