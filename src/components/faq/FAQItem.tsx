import React, { FC, useRef, useState } from "react";
import "./FAQ.scss";

export const FAQItem: FC = () => {
	const itemRef = useRef(null);
	const [openAnswer, setOpenAnswer] = useState(false);

	return (
		<div className="faq_item">
			<div className="faq_item-top">
				<span>When is the next God of War coming out?</span>
				<button onClick={() => setOpenAnswer(!openAnswer)}>
					{!openAnswer ? "+" : `x`}
				</button>
			</div>
			<div
				className={!openAnswer ? "faq_item-bottom" : "faq_item-bottom open"}
				style={openAnswer ? { height: `84px` } : { height: "0px" }}
			>
				<p ref={itemRef}>
					God of War Ragnarök will release on <span>November 9, 2022</span>. To
					get the latest updates on release timing, make sure you follow Santa
					Monica Studio on Twitter, Instagram and Facebook!
				</p>
			</div>
		</div>
	);
};
