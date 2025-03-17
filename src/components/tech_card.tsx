import React, { forwardRef, useState } from 'react';
import TechCard1 from '../assets/images/macbook _tech_card_1.svg';
import TechCard2 from '../assets/images/macbook _tech_card_2.svg';
import TechCard3 from '../assets/images/macbook _tech_card_3.svg';
import TechCard4 from '../assets/images/macbook _tech_card_4.svg';

const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
  const items = [1, 2, 3, 4];
  const [activeSlide, setActiveSlide] = useState(1);

  return <div ref={ref} className="tech_card_page">
    <div className='tech_card_content_container'>
      <span className='tech_card_title'>Технологічні карти</span>

      <div className='tech_card_text_container'>
        <div className='tech_card_sub_text_container'>
          <div className='tech_card_text_item'>
            <span className='tech_card_text'>Автоматичне створення</span>
            <br />
            <span className='tech_card_text'>та прорахунок собівартості</span>
          </div>
          <div className='tech_card_text_item'>
            <span className='tech_card_text'>Підвищення ефективності</span>
            <br />
            <span className='tech_card_text'>кожної операції</span>
          </div>
          <div className='tech_card_text_item'>
            <span className='tech_card_text'>Аналіз та рекомендації</span>
          </div>
          <div className='tech_card_text_item'>
            <span className='tech_card_text'>Моніторинг та коригування</span>
            <br />
            <span className='tech_card_text'>в реальному часі</span>
          </div>
        </div>
        <div className='tech_card_img_container'>
          <img className="logo_card_img" src={TechCard1} alt="Tech Card" />
          <div className='menu_slides_container'>
            {items.map((item, index) => (
              <div key={item} className={`menu-item item-${item}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>;
});

export default TechCard;