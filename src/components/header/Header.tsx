import React, { FC, useState } from 'react';
import { Dropdown } from './dropdown/Dropdown.tsx';
import { SiSteam } from "react-icons/si";
import './Header.scss';
import { Timer } from './timer/Timer.tsx';

export const Header: FC = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [choiseLanguage, setChoiseLanguage] = useState('English');

    return (
        <div className="header">
            <div className="header_container">
                <div className="header_sidebar">
                    <div className="header_sidebar-logo">
                        <SiSteam />
                    </div>
                    <div className="header_sidebar-item">Editions</div>
                    <div className="header_sidebar-item">Controller</div>
                    <div className="header_sidebar-item">About Game</div>
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
