import React from 'react';
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
       <div className="footer_container">
            <div className="footer_nav">
                <span className="footer_nav-item">editions</span>
                <span className="footer_nav-item">controller</span>
                <span className="footer_nav-item">about</span>
                <span className="footer_nav-item">explore</span>
                <span className="footer_nav-item">news</span>
                <span className="footer_nav-item">faq</span>
            </div>
            <div className="footer_text">
                <span>
                    Download of this product is subject to the PlayStation 
                    Network Terms of Service and our Software Usage Terms 
                    plus any specific additional conditions applying to this 
                    product. If you do not wish to accept these terms, do 
                    not download this product. See Terms of Service for 
                    more important information.
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
