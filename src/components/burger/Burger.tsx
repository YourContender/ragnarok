import React from 'react';
import "./Burger.scss";
import { SiSteam } from 'react-icons/si';
import { t } from 'i18next';

export const Burger = () => {
  return (
    <div className="burger">
        <div className="burger-logo">
            <SiSteam />
        </div>
        <div className="burger-item">{t("header.editions")}</div>
        <div className="burger-item">{t("header.about")}</div>
        <div className="burger-item">{t("header.explore")}</div>
        <div className="burger-item">{t("header.news")}</div>
        <div className="burger-item">{t("header.faq")}</div>
    </div>
  )
}
