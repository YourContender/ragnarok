import React from 'react';
import "./FAQ.scss";
import { FAQItem } from './FAQItem.tsx';

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq_title">
        <h1>FAQ</h1>
      </div>

      <div className="faq_container">
        <FAQItem/>
        <FAQItem/>
      </div>
    </div>
  )
}
