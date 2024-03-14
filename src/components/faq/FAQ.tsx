import React from 'react';
import "./FAQ.scss";
import { FAQItem } from './FAQItem';

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq_container">
        <FAQItem/>
        <FAQItem/>
      </div>
    </div>
  )
}
