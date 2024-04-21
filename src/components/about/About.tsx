import React, { FC } from 'react';
import "./About.scss";
import { t } from 'i18next';

export const About: FC = () => {
  return (
    <div className="about">
        <div className="about_title">
            <h1>{t("about")}</h1>
        </div>
        <div className="about_container">
            <div className="about_container-text">
                <h1>{t("video")}</h1>
                <button>play</button>
            </div>
        </div>
    </div>
  )
}
