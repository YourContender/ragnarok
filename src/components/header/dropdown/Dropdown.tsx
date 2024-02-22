import React from 'react';
import './Dropdown.scss';

interface DropdownProps {
    openDropdown: boolean;
    choiseLanguage: string;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
    setChoiseLanguage: React.Dispatch<React.SetStateAction<string>>
}


export const Dropdown = ({openDropdown, choiseLanguage, setOpenDropdown, setChoiseLanguage}) => {
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
                <li className={choiseLanguage === "ENG" ? "active" : ""} onClick={() => changeLanguage("ENG")}>ENG</li>
                <li className={choiseLanguage === "UA" ? "active" : ""} onClick={() => changeLanguage("UA")}>UA</li>
            </ul>
        </div>
    )
}
