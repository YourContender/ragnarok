import React, { FC } from 'react';
import "./Editions.scss";
import { editions } from "../../data";
import { EditionsItem } from './EditionsItem.tsx';
import { t } from 'i18next';

interface EditionsProps {
  openModal: (price: string) => void;
}

export const Editions: FC<EditionsProps> = ({ openModal }) => {
  return (
    <div className="editions">
        <div className="editions_title">
            <h1>{t("editions.title")}</h1>
        </div>

        <div className="editions_container">
            {editions.map(item => {
                return (
                  <EditionsItem 
                    key={item.id} 
                    item={item} 
                    openModal={openModal}
                  />
                )       
            })}            
        </div>
    </div>
  )
}
