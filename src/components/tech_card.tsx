import React, { forwardRef } from 'react';
import TechCard1 from '../assets/images/macbook _tech_card_1.svg';
import TechCard2 from '../assets/images/macbook _tech_card_2.svg';
import TechCard3 from '../assets/images/macbook _tech_card_3.svg';
import TechCard4 from '../assets/images/macbook _tech_card_4.svg';

const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="tech_card_page">
    <div className='tech_card_content_container'>
      <div className='tech_card_title'>Технологічні карти</div>
      <div className='tech_card_text_container'>
        <div className='tech_card_text'>Автоматичне створення та прорахунок собівартості</div>
        <div className='tech_card_text'>Підвищення ефективності кожної операції</div>
        <div className='tech_card_text'>Аналіз та рекомендації</div>
        <div className='tech_card_text'>Моніторинг та коригування в реальному часі</div>
      </div>
    </div>
    <div className='tech_card_img_container'>
      <img className="logo" src={TechCard1} alt="Tech Card" />
    </div>
  </div>;
});

export default TechCard;
