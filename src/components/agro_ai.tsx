import React, { forwardRef } from 'react';
import arrow from '../assets/images/arrow.svg';
import agroAi from '../assets/images/agro_ai.jpg';

const AgroAi = forwardRef<HTMLDivElement>((props, ref) => {
  const handleClickMvp = () => {

  };

  return <div ref={ref} className="agro_ai_page">
    <div className='agro_ai_title'>AgroAssistantAI</div>
    <div className='agro_ai_sub_title'>права рука фермера</div>
    <div className='agro_ai_content_container'>
      <div className='agro_ai_text_container'>
        <div className='agro_ai_text_title'>Все необхідне в одному місці</div>
        <div className='agro_ai_text'>
          <div className='agro_ai_text_item'>Створює технологічні карти та розраховує рентабельність</div>
          <div className='agro_ai_text_item'>Моніторить ріст кожної рослини </div>
          <div className='agro_ai_text_item'>Попереджує про шкідників та хвороби</div>
          <div className='agro_ai_text_item'>Аналізує вплив погоди та дає рекомендації</div>
          <div className='agro_ai_text_item'>Робить хронометраж операцій та підвищує їх ефективність</div>
          <div className='agro_ai_text_item'>Рекомендує найпідходяще насіння, хімію та добрива</div>
        </div>
        <div className='agro_ai_button_container'>
          <div className='agro_ai_button'>
            <div className='agro_ai_button_text'>Доєднатися</div>
            <img onClick={handleClickMvp} className="mvp_button" src={arrow} alt="MVP" /></div>
        </div>
      </div>
      <div className='agro_ai_photo_container'>
        <img className="agro_ai_photo" src={agroAi} alt="Agro AI" />
      </div>
    </div>
  </div>;
});

export default AgroAi;