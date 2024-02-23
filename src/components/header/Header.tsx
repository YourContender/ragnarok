import React, { FC, useState } from 'react';
import { Dropdown } from './dropdown/Dropdown.tsx';
import { SiSteam } from "react-icons/si";
import { Timer } from './timer/Timer.tsx';
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.scss';

export const Header: FC = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [choiseLanguage, setChoiseLanguage] = useState('English');

    return (
        <div className="header">
            <div className="header_container">
                <RxHamburgerMenu className="header_burger"/>
                <div className="header_sidebar">
                    <div className="header_sidebar-logo">
                        <SiSteam />
                    </div>
                    <div className="header_sidebar-item">Editions</div>
                    <div className="header_sidebar-item">About</div>
                    <div className="header_sidebar-item">Explore</div>
                    <div className="header_sidebar-item">News</div>
                    <div className="header_sidebar-item">FAQ</div>
                    <Dropdown 
                        setChoiseLanguage={setChoiseLanguage} 
                        choiseLanguage={choiseLanguage}
                        setOpenDropdown={setOpenDropdown} 
                        openDropdown={openDropdown}/>
                </div>

                
                <div className="header_date">
                    <Timer/>
                </div>
            </div>
        </div>
    )
}
