import React, { FC } from 'react';
import { Editions } from '../../types';
import { t } from 'i18next';

interface EditionsItemProps {
    item: Editions
    openModal: (price: string) => void;
}

export const EditionsItem: FC<EditionsItemProps> = ({ item, openModal }) => {
  return (
    <div className="editions_card">
        <div className="editions_card-img">
            <img src={item.img} alt="card 1" />
        </div>
        <div className="editions_card-title">
            <h2>{item.title}</h2>
            <span>{item.subtitle}</span>
        </div>
        <div className="editions_card-descr">
            {
                item.title === "Standard Edition" ? 
                    <>
                        <span>{t("editions.standard.first")}</span>
                        <span>{t("editions.standard.second")}</span>
                        <span>{t("editions.standard.third")}</span>   
                    </> 
                :
                    <>
                        <span>{t("editions.deluxe.first")}</span>
                        <span>{t("editions.deluxe.second")}</span>
                        <span>{t("editions.deluxe.third")}</span>  
                    </>
            }
        </div>
        <div className="editions_card-price">
            <span>{item.price}</span>
            <button onClick={() => openModal(item.price)}>{t("editions.button")}</button>
        </div>
    </div>
  )
}
