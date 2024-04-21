import React, { FC, useState } from 'react';
import { TitleProps } from '../../../types';
import i18n from '../../../i18n';
import './Dropdown.scss';
import { t } from 'i18next';

interface DropdownProps {
    openDropdown: boolean;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
    locales: {
        [title: string]: TitleProps
    }
}

export const Dropdown: FC<DropdownProps> = ({
    openDropdown, setOpenDropdown, locales
}) => {
    const changeLanguage = (item: string) => {
        setOpenDropdown(false);
        i18n.changeLanguage(item);
    }

    return (
        <div 
            className="dropdown" 
            onClick={() => setOpenDropdown(!openDropdown)}
        >
            <div className={openDropdown ? "select select-clicked" : "select"}>
                <span className="selected">{t("language")}</span>
                <div className={openDropdown ? "caret caret-rotate" : "caret"}></div>
            </div>
            <ul className={openDropdown ? "menu menu-open" : "menu"}>
                {Object.keys(locales).map(item => (
                    <li
                        onClick={() => changeLanguage(item)}
                    >
                        {locales[item].title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
