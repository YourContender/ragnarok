import React, { FC, useState } from 'react';
import "./Explore.scss";
import { SwitchButton } from '../widgets/SwitchButton.tsx';
import { exploreData } from '../../data.js';
import { ExploreItemPC } from './ExploreItemPC.tsx';


export const Explore: FC = () => {
    // console.log(exploreData[0])
    const [changeDescription, setChangeDescription] = useState("min");
    const [changeDescriptionPS, setChangeDescriptionPS] = useState("min");

    return (
        <div className="explore">
            <div className="explore_title">
                <h1>Explore the God of War series</h1>
            </div>

            <div className="explore_pc">
                <div className="explore_pc-title">
                    <h4>Here are the God of War (PC) System Requirements</h4>
                </div>
                <div className="explore_pc-switch">
                    <span 
                        className={
                            changeDescription === "min" ? 
                                "explore_pc-switch-item active" : 
                                "explore_pc-switch-item"}
                    >
                        Minimum
                    </span>
                    <SwitchButton 
                        changeDescription={changeDescription} 
                        setChangeDescription={setChangeDescription}
                    />
                    <span 
                        className={
                            changeDescription === "rec" ? 
                            "explore_pc-switch-item active" : 
                            "explore_pc-switch-item"}
                    >
                        Recommended
                    </span>
                </div>
                <div className="explore_pc-block">
                    <div className="explore_pc-block-container">
                        <div className="explore_pc-block-img"></div>
                        <img src={require('../../img/explore1.png')} alt="" />
                    </div>

                    <ExploreItemPC 
                        data={changeDescription === "min" ? exploreData[0] : exploreData[1]}
                    />
                </div>
            </div>

            <div className="explore_ps">
                <div className="explore_ps-title">
                    <h4>God of War for PS4</h4>
                </div>
                <div className="explore_ps-switch">
                    <span 
                        className={
                            changeDescription === "min" ? 
                                "explore_pc-switch-item active" : 
                                "explore_pc-switch-item"}
                    >
                        Standard
                    </span>
                    <SwitchButton 
                        changeDescription={changeDescription} 
                        setChangeDescription={setChangeDescription}
                    />
                    <span 
                        className={
                            changeDescription === "rec" ? 
                            "explore_pc-switch-item active" : 
                            "explore_pc-switch-item"}
                    >
                        Limited
                    </span>
                </div>
                <div className="explore_ps-price">
                    <h2>15.99 $</h2>
                </div>
                <div className="explore_ps-block">
                    <ExploreItemPC 
                        data={changeDescription === "min" ? exploreData[0] : exploreData[1]}
                    />

                    <div className="explore_ps-block-container">
                        <div className="explore_ps-block-img"></div>
                        <img src={require('../../img/explore2.png')} alt="" />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
