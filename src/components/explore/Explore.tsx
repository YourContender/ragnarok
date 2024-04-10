import React, { FC, useState } from 'react';
import { ExplorePC } from './pc/ExplorePC.tsx';
import { ExplorePS } from './ps/ExplorePS.tsx';
import "./Explore.scss";;

interface ExploreProps {
    openModal: (price: string) => void;
}

export const Explore: FC<ExploreProps> = ({ openModal }) => {
    const [changeDescriptionPC, setChangeDescriptionPC] = useState("min");
    const [changeDescriptionPS, setChangeDescriptionPS] = useState("min");

    return (
        <div className="explore">
            <div className="explore_title">
                <h1>Explore the God of War series</h1>
            </div>

            <ExplorePC 
                openModal={openModal}
                changeDescriptionPC={changeDescriptionPC} 
                setChangeDescriptionPC={setChangeDescriptionPC}/>

            <ExplorePS 
                openModal={openModal}
                changeDescription={changeDescriptionPS} 
                setChangeDescription={setChangeDescriptionPS}/>
        </div>
    )
}
