import { forwardRef } from 'react';
import ecosystemImg from '../assets/images/ecosystem_image.svg';
import ecosystem1 from '../assets/images/ecosystem_1.svg';
import ecosystem2 from '../assets/images/ecosystem_2.svg';
import ecosystem3 from '../assets/images/ecosystem_3.svg';
import ecosystem4 from '../assets/images/ecosystem_4.svg';
import ecosystem5 from '../assets/images/ecosystem_5.svg';
import ecosystem6 from '../assets/images/ecosystem_6.svg';
import ecosystem7 from '../assets/images/ecosystem_7.svg';
import ecosystem8 from '../assets/images/ecosystem_8.svg';
import ecosystem9 from '../assets/images/ecosystem_9.svg';

const Ecosystem = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="ecosystem_page">
    <div className='ecosystem_img_container'>
      <img className="ecosystem_img" src={ecosystemImg} alt="Ecosystem" />
    </div>
    <div className='ecosystem_title'>Концепція створення екосистеми <span className='ecosystem_sperow'>SPEROW</span></div>
    <div className='ecosystem_block_container'>
      <div className='ecosystem_first_block'>
        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem1} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Єдина інформаційна система управління бізнесом</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem2} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Автоматизовані гнучкi бiзнес-процеси</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem3} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Інструменти роботи для прийняття рішень</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem4} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Менеджмент завдань фахiвцiв</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem5} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Система інформаційних повідомлень</div>
        </div>
      </div>
      <div className='ecosystem_second_block'>
        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem6} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Аналiтична звiтнiсть на основi ризик менеджменту</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem7} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Автоматизований документообіг</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem8} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Онлайн-режим подiй в бiзнесi</div>
        </div>

        <div className='ecosystem_item'>
          <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem9} alt="Ecosystem" /></div>
          <div className='ecosystem_text'>Простий та зрозумілий інтерфейс</div>
        </div>
      </div>
    </div>
  </div>;
});

export default Ecosystem;
