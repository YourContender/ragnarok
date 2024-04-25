import React from 'react';
import "./Footer.scss";
import { t } from 'i18next';

export const Footer = () => {
  return (
    <div className="footer">
       <div className="footer_container">
            <div className="footer_nav">
                <span className="footer_nav-item">{t("footer.editions")}</span>
                <span className="footer_nav-item">{t("footer.about")}</span>
                <span className="footer_nav-item">{t("footer.explore")}</span>
                <span className="footer_nav-item">{t("footer.news")}</span>
                <span className="footer_nav-item">{t("footer.faq")}</span>
            </div>
            <div className="footer_text">
                <span>
                    {t("footer.descr")}
                </span>
            </div>
            <div className="footer_image">
                <img src={require('../../img/ps.png')} alt="" />
                <span>2024</span>
                <p>Sergey Sayenko</p>
            </div>
            <div className="footer_image-bg">
                <img src={require('../../img/bg.png')} alt="" />
            </div>
       </div>
    </div>
  )
}
