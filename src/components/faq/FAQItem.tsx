import React, { FC, useRef, useState } from "react";
import "./FAQ.scss";
import { t } from "i18next";

export const FAQItem: FC = () => {
	const itemRef = useRef(null);
	const [openAnswer, setOpenAnswer] = useState(false);

	return (
		<div className="faq_item">
			<div className="faq_item-top">
				<span>{t("faq.subtitle")}</span>
				<button onClick={() => setOpenAnswer(!openAnswer)}>
					{!openAnswer ? "+" : `x`}
				</button>
			</div>
			<div
				className={!openAnswer ? "faq_item-bottom" : "faq_item-bottom open"}
				style={openAnswer ? { height: `110px` } : { height: "0px" }}
			>
				<p ref={itemRef}>
					{t("faq.descr1")} 
					<span> {t("faq.descr2")} </span>
					{t("faq.descr3")}
				</p>
			</div>
		</div>
	);
};
