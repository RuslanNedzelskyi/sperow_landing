import React, { forwardRef } from 'react';
import arrow from '../assets/images/arrow.svg';
import agroAi from '../assets/images/agro_ai.jpg';

interface IAgroAiProps {
  handleOpenModal: () => void;
}

const AgroAi = forwardRef<HTMLDivElement, IAgroAiProps>((props, ref) => {
  return <div ref={ref} className="agro_ai_page">
    <div className='agro_ai_title'>AgroAssistantAI</div>
    <div className='agro_ai_sub_title'>права рука фермера</div>
    <div className='agro_ai_content_container'>
      <div className='agro_ai_text_container'>
        <div className='agro_ai_text_title'>Все необхідне в одному місці</div>
        <div className='agro_ai_text'>
          <div className='agro_ai_text_item'>Створення технологічної карти та розрахунок рентабельності</div>
          <div className='agro_ai_text_item'>Моніторинг росту кожної рослини</div>
          <div className='agro_ai_text_item'>Попередження шкідників та хвороб</div>
          <div className='agro_ai_text_item'>Аналізує вплив погоди та дає рекомендації</div>
          <div className='agro_ai_text_item'>Хронометраж операцій та підвищення ефективності за Кайдзен методологією</div>
          <div className='agro_ai_text_item'>Рекомендує найбільш підходяще насіння, хімію та добрива</div>
        </div>
        <div className='agro_ai_button_container'>
          <div onClick={props.handleOpenModal} className='agro_ai_button'>
            <div className='agro_ai_button_text'>Доєднатися</div>
            <img className="mvp_button" src={arrow} alt="MVP" /></div>
        </div>
      </div>
      <div className='agro_ai_photo_container'>
        <img className="agro_ai_photo" src={agroAi} alt="Agro AI" />
      </div>
    </div>
  </div>;
});

export default AgroAi;