import React from "react";
import { Header } from "./components/header/Header.tsx";
import { Preview } from "./components/preview/Preview.tsx";
import { Editions } from "./components/editions/Editions.tsx";
import { DualSense } from "./components/dual-sense/DualSense.tsx";
import { About } from "./components/about/About.tsx";
import { Explore } from "./components/explore/Explore.tsx";

export const App = () => {
	return (
		<div>
			<Header />
			<Preview />
			<Editions />
			<DualSense />
			<About />
			<Explore />
		</div>
	);
};
