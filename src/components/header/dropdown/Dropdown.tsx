import React, { FC } from 'react';
import './Dropdown.scss';

interface DropdownProps {
    openDropdown: boolean;
    choiseLanguage: string;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
    setChoiseLanguage: React.Dispatch<React.SetStateAction<string>>
}


export const Dropdown: FC<DropdownProps> = ({openDropdown, choiseLanguage, setOpenDropdown, setChoiseLanguage}) => {
    const changeLanguage = (language: string) => {
        setChoiseLanguage(language);
        setOpenDropdown(false);
    }

    return (
        <div className="dropdown" onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={openDropdown ? "select select-clicked" : "select"}>
                <span className="selected">{choiseLanguage}</span>
                <div className={openDropdown ? "caret caret-rotate" : "caret"}></div>
            </div>
            <ul className={openDropdown ? "menu menu-open" : "menu"}>
                <li className={choiseLanguage === "English" ? "active" : ""} onClick={() => changeLanguage("English")}>English</li>
                <li className={choiseLanguage === "Ukrainian" ? "active" : ""} onClick={() => changeLanguage("Ukrainian")}>Ukrainian</li>
            </ul>
        </div>
    )
}
