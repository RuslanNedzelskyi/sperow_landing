import { forwardRef } from 'react';
import arrow from '../assets/images/arrow.svg';

const Mission = forwardRef<HTMLDivElement>((props, ref) => {
  const handleClickMvp = () => {

  }

  return <div ref={ref} className="mission_page">
    <div className='mission_content_container'>
      <div className='our_mission_text_container'>
        <div className='our_mission_text'><span  className='our_mission'>Наша місія</span> — зробити сільське господарство України найбільш конкурентним у світі.</div>
        <div className='our_mission_text_continue'>Ми прагнемо цифровізувати аграрний сектор, роблячи його більш передбачуваним і контрольованим.</div>
      </div>
      <div className='mission_button_container'>
        <div className='mission_button'>
          <div className='mission_button_text'>Доєднатися</div>
          <img onClick={handleClickMvp} className="mvp_button" src={arrow} alt="MVP" /></div>
      </div>
    </div>
    <div className='mission_text_container'>
      <div className='mission_text_item'>Зробити сільське господарство доступним і зрозумілим для кожного, надаючи малим і середнім аграріям інструменти для розвитку бізнесу. </div>
      <div className='mission_text_item'>Дати можливість фермерам використовувати передові технології, знайти якісних постачальників і працівників і ділитися досвідом. </div>
      <div className='mission_text_item'>Об’єднати всіх, хто працює в аграрній сфері: підприємців, працівників та постачальників товарів та послуг.</div>
      <div className='mission_text_item'>Створити платформу для діалогу та прозорої оцінки діяльності всіх користувачів платформи.</div>
    </div>
  </div>;
});

export default Mission;
