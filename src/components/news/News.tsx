import React from 'react';
import { NewsItem } from './news-item/NewsItem.tsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.scss";
import { t } from 'i18next';

export const News = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pagination: false
        }
      }
    ]
  };

  return (
    <div className="news">
      <div className="news_container">
      <div className="news_title">
        <h1>{t("news.title")}</h1>
      </div>
        <Slider {...settings}>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Slider>
      </div>

    </div>
  )
}
