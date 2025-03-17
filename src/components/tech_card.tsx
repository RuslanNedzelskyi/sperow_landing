import React, { forwardRef, useState } from 'react';
import TechCard1 from '../assets/images/macbook _tech_card_1.svg';
import TechCard2 from '../assets/images/macbook _tech_card_2.svg';
import TechCard3 from '../assets/images/macbook _tech_card_3.svg';
import TechCard4 from '../assets/images/macbook _tech_card_4.svg';
//test
const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
  const items = [0, 1, 2, 3];
  const [activeSlide, setActiveSlide] = useState(0);

  return <div ref={ref} className="tech_card_page">
    <div className='tech_card_content_container'>
      {
        activeSlide === 0 ? <span className='tech_card_title'>Технологічні карти</span> :
          activeSlide === 1 ? <span className='tech_card_title'>Моніторинг</span> :
            activeSlide === 2 ? <span className='tech_card_title'>Сівообіг та поля</span> :
              <span className='tech_card_title'>Погода</span> 
      }

      <div className='tech_card_text_container'>
        {
          activeSlide === 0 ?
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
            </div> :
            activeSlide === 1 ?
              <div className='tech_card_sub_text_container'>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>Попередження хвороб та </span>
                  <br />
                  <span className='tech_card_text'>шкідників</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>Відслідковування вегетації,</span>
                  <br />
                  <span className='tech_card_text'>оцінка ризикових факторів</span>
                  <br />
                  <span className='tech_card_text'>та шляхи вирішення</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>Історія моніторингу</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>Персональний моніторинг </span>
                  <br />
                  <span className='tech_card_text'>кожної культури на кожній</span>
                  <br />
                  <span className='tech_card_text'>ділянці</span>
                </div>
              </div> :
              activeSlide === 2 ?
                <div className='tech_card_sub_text_container'>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Підвищення ефективності </span>
                    <br />
                    <span className='tech_card_text'>кожного ГА</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Рекомендації стосовно </span>
                    <br />
                    <span className='tech_card_text'>наступних дій</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Точне землеробство</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Автоматичний підрахунок</span>
                    <br />
                    <span className='tech_card_text'>рентабельності кожної</span>
                    <br />
                    <span className='tech_card_text'>ділянки</span>
                  </div>
                </div> :
                <div className='tech_card_sub_text_container'>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Аналіз та прогнозування </span>
                    <br />
                    <span className='tech_card_text'>погоди</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Вплив погоди на кожній </span>
                    <br />
                    <span className='tech_card_text'>ділянці</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>Статистика</span>
                  </div>
                </div>
        }


        <div className='tech_card_img_container'>
          {
            activeSlide === 0 ?
              <img className="logo_card_img" src={TechCard1} alt="Tech Card" /> :
              activeSlide === 1 ?
                <img className="logo_card_img" src={TechCard2} alt="Tech Card" /> :
                activeSlide === 2 ?
                  <img className="logo_card_img" src={TechCard3} alt="Tech Card" /> :
                  <img className="logo_card_img" src={TechCard4} alt="Tech Card" />
          }
          <div className='menu_slides_container'>
            {items.map((item, index) => (
              <div onClick={() => setActiveSlide(index)} key={item} className={activeSlide === index ? 'menu-item active' : 'menu-item'}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>;
});

export default TechCard;