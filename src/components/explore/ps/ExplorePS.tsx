import React, { FC } from 'react'
import { ExploreItemPS } from './ExploreItemPS.tsx';
import { exploreData } from '../../../data';
import { SwitchButton } from '../../widgets/SwitchButton.tsx';
import { t } from 'i18next';

interface ExplorePSProps {
    setChangeDescription: React.Dispatch<React.SetStateAction<string>>;
    changeDescription: string;
    openModal: (price: string) => void;
}

export const ExplorePS: FC<ExplorePSProps> = ({ changeDescription, setChangeDescription, openModal }) => {
    return (
        <div className="explore_ps">
            <div className="explore_ps-title">
                <h4>{t("explore.descr1")}</h4>
            </div>
            <div className="explore_ps-switch">
                <SwitchButton 
                    changeDescription={changeDescription} 
                    setChangeDescription={setChangeDescription}
                    first="Standard"
                    second="Limited"
                />
            </div>
            <div className="explore_ps-price">
                <h2>{changeDescription === "min" ? "15.99 $" : "30.99 $"}</h2>
            </div>
            <div className="explore_ps-block">
                <ExploreItemPS 
                    data={changeDescription === "min" ? exploreData[0] : exploreData[1]}
                    openModal={openModal}
                />

                <div className="explore_ps-block-container">
                    <div className="explore_ps-block-img"></div>
                    <img src={require('../../../img/explore2.png')} alt="" />
                </div>
            </div>
        </div>
    )
}
