import React, { FC } from "react";
import "./SwitchButton.scss";

interface SwitchButtonProps {
    setChangeDescription: React.Dispatch<React.SetStateAction<string>>;
    changeDescription: string;
	first: string;
	second: string
}

export const SwitchButton: FC<SwitchButtonProps> = ({ changeDescription, setChangeDescription, first, second}) => {
	const showOtherDescription = () => {
		setChangeDescription(changeDescription === "min" ? "rec" : "min")
	}

	return (
		<>
			<span 
				className={
					changeDescription === "min" ? 
						"explore_pc-switch-item active" : 
						"explore_pc-switch-item"}
			>
				{first}
			</span>

			<label className="switch">

				<input type="checkbox"  onClick={showOtherDescription}/>
				<span className="move"></span>
			</label>

			<span 
				className={
					changeDescription === "rec" ? 
						"explore_pc-switch-item active" : 
						"explore_pc-switch-item"}
			>
				{second}
			</span>
		</>
	);
};
