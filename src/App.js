import React from "react";
import { Header } from "./components/header/Header.tsx";
import { Preview } from "./components/preview/Preview.tsx";
import { Editions } from "./components/editions/Editions.tsx";

export const App = () => {
	return (
		<div>
			<Header />
			<Preview />
			<Editions />
		</div>
	);
};
