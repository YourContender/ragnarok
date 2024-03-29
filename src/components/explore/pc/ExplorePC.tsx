import React, { FC } from 'react'
import { SwitchButton } from '../../widgets/SwitchButton.tsx';
import { ExploreItemPC } from './ExploreItemPC.tsx';
import { exploreData } from '../../../data';

interface ExplorePCProps {
    setChangeDescriptionPC: React.Dispatch<React.SetStateAction<string>>;
    changeDescriptionPC: string;
}

export const ExplorePC: FC<ExplorePCProps> = ({changeDescriptionPC, setChangeDescriptionPC}) => {
    return (
        <div className="explore_pc">
            <div className="explore_pc-title">
                <h4>Here are the God of War (PC) System Requirements</h4>
            </div>
            <div className="explore_pc-switch">
                <SwitchButton 
                    changeDescription={changeDescriptionPC} 
                    setChangeDescription={setChangeDescriptionPC}
                    first="Minimum"
                    second="Recommended"
                />  
            </div>
            <div className="explore_pc-block">
                <div className="explore_pc-block-container">
                    <div className="explore_pc-block-img"></div>
                    <img src={require('../../../img/explore1.png')} alt="" />
                </div>

                <ExploreItemPC 
                    data={changeDescriptionPC === "min" ? exploreData[0] : exploreData[1]}
                />
            </div>
        </div>
    )
}
