import React, { useState } from "react";
import { Header } from "./components/header/Header.tsx";
import { Preview } from "./components/preview/Preview.tsx";
import { Editions } from "./components/editions/Editions.tsx";
import { DualSense } from "./components/dual-sense/DualSense.tsx";
import { About } from "./components/about/About.tsx";
import { Explore } from "./components/explore/Explore.tsx";
import { News } from "./components/news/News.tsx";
import { FAQ } from "./components/faq/FAQ.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import Modal from "./components/modal/Modal.tsx";

export const App = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		return setShowModal(!showModal);
	};

	const openModal = () => {
		console.log('open modal')
		setShowModal(true);
	}

	return (
		<div>
			<Header />
			<Preview showModal={showModal} setShowModal={setShowModal} openModal={openModal} />
			<Editions showModal={showModal} setShowModal={setShowModal} />
			<DualSense />
			<About />
			<Explore />
			<News />
			<FAQ />
			<Footer />																												
			{
				showModal ? <Modal showModal={showModal} setShowModal={setShowModal} /> : null
			}
		</div>
	);
};