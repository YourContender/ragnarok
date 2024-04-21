import React from 'react';
import "../News.scss";
import { t } from 'i18next';

export const NewsItem = () => {
    return (
        <div className="news_item">
            <div className="news_item-up">
                <span className="news_item-up-name">{t("news.subtitle")}</span>
                <span className="news_item-up-date">19/10/2022</span>
            </div>

            <div className="news_item-title">
                <h2>{t("news.item.title")}</h2>
            </div>
            
            <div className="news_item-content">
                <img src={require("../../../img/news/two.png")} alt="" />
                
                <div className="news_item-content-text">
                    <span>
                        {t("news.item.descr")}
                    </span>

                    <button>{t("news.item.button")}</button>
                </div>
            </div>
        </div>
    )
}
