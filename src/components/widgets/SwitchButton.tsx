import React, { FC } from "react";
import "./SwitchButton.scss";

interface SwitchButtonProps {
    setChangeDescription: React.Dispatch<React.SetStateAction<string>>;
    changeDescription: string;
}

export const SwitchButton: FC<SwitchButtonProps> = ({ changeDescription, setChangeDescription}) => {
	const showOtherDescription = () => {
		setChangeDescription(changeDescription === "min" ? "rec" : "min")
	}

	return (
		<label className="switch">
			{/* <MdOutlineWbSunny className="switch_sun" />
			<FaRegMoon className="switch_moon" /> */}
			<input type="checkbox"  onClick={showOtherDescription}/>
			<span className="move"></span>
		</label>
	);
};
