import React, { FC, useState } from 'react';
import { Dropdown } from './dropdown/Dropdown.tsx';
import { SiSteam } from "react-icons/si";
import { Timer } from './timer/Timer.tsx';
import { RxHamburgerMenu } from "react-icons/rx";
import { TitleProps } from '../../types.ts';
import { t } from 'i18next';
import './Header.scss';

interface HeaderProps {
    [key: string]: {
        [title: string]: TitleProps
    };
}

export const Header: FC<HeaderProps> = ({ locales }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className="header">
            <div className="header_container">
                <RxHamburgerMenu className="header_burger"/>
                <div className="header_sidebar">
                    <div className="header_sidebar-logo">
                        <SiSteam />
                    </div>
                    <div className="header_sidebar-item">{t("header.editions")}</div>
                    <div className="header_sidebar-item">{t("header.about")}</div>
                    <div className="header_sidebar-item">{t("header.explore")}</div>
                    <div className="header_sidebar-item">{t("header.news")}</div>
                    <div className="header_sidebar-item">{t("header.faq")}</div>
                    <Dropdown 
                        setOpenDropdown={setOpenDropdown} 
                        openDropdown={openDropdown}
                        locales={locales}/>
                </div>

                
                <div className="header_date">
                    <Timer/>
                </div>
            </div>
        </div>
    )
}
