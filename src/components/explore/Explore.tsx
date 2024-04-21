import React, { FC, useState } from 'react';
import { ExplorePC } from './pc/ExplorePC.tsx';
import { ExplorePS } from './ps/ExplorePS.tsx';
import "./Explore.scss";import { t } from 'i18next';
;

interface ExploreProps {
    openModal: (price: string) => void;
}

export const Explore: FC<ExploreProps> = ({ openModal }) => {
    const [changeDescriptionPC, setChangeDescriptionPC] = useState("min");
    const [changeDescriptionPS, setChangeDescriptionPS] = useState("min");

    return (
        <div className="explore">
            <div className="explore_title">
                <h1>{t("explore.title")}</h1>
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
