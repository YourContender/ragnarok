import React from 'react';
import "../News.scss";

export const NewsItem = () => {
    return (
        <div className="news_item">
            <div className="news_item-up">
                <span className="news_item-up-name">God of War Ragnarok</span>
                <span className="news_item-up-date">19/10/2022</span>
            </div>

            <div className="news_item-title">
                <h2>will receive a large update on release</h2>
            </div>
            
            <div className="news_item-content">
                <img src={require("../../../img/news/two.png")} alt="" />
                
                <div className="news_item-content-text">
                    <span>
                        God of War: Ragnarok is fast approaching. 
                        No wonder that we have been regularly receiving new information
                        and materials related to the title in recent times. 
                        Last week, a trailer presenting the possibilities of the game on PlayStation 5 
                        hit the network, and a little earlier we learned that the work on the 
                        production was completed . Meanwhile, it turns out that the upcoming sequel
                        to the adventures of Kratos and Atreus will receive a major update on release.
                    </span>

                    <button>read</button>
                </div>
            </div>
        </div>
    )
}
