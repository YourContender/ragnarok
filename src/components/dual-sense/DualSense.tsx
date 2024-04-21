import React, { FC } from 'react'
import "./DualSense.scss";
import { t } from 'i18next';

interface DualSenseProps {
    openModal: (price: string) => void;
}

export const DualSense: FC<DualSenseProps> = ({ openModal }) => {
  return (
    <div className="sense">
        <div className="sense_title">
            <h1>{t("dualsense.title")}</h1>
        </div>
        <div className="sense_container">
            <div className="sense_container-left">
                <div className="sense_container-top">
                    {t("dualsense.descr1.part1")}
                    <span> {t("dualsense.descr1.part2")} </span> 
                    {t("dualsense.descr1.part3")}
                </div>
                <div className="sense_container-bottom">
                    {t("dualsense.descr2.part1")} 
                    <span> {t("dualsense.descr2.part2")} </span> 
                    {t("dualsense.descr2.part3")}
                </div>
                <div className="sense_price">
                    <span>35.99$</span>
                    <button onClick={() => openModal("35.99$")}>
                        {t("dualsense.button")}
                    </button>
                </div>
            </div>
            <div className="sense_container-img">
                <img src={require('../../img/console.png')} alt="" />
            </div>
        </div>
    </div>
  )
}
