import { forwardRef } from 'react';
import arrow from '../assets/images/arrow.svg';
import { useTranslation } from "react-i18next";
import { useDeviceType } from '../hooks/useDeviceType';

interface IMissionProps {
  handleOpenModal: () => void;
}

const Mission = forwardRef<HTMLDivElement, IMissionProps>((props, ref) => {
  const { t } = useTranslation();
  const deviceType = useDeviceType();

  return <div ref={ref} className="mission_page">
    {deviceType === 'mobile' ? (
      <div className='mission_all_container'>
        <div className='mission_content_container'>
          <div className='our_mission_text_container'>
            <div className='our_mission_text'><span className='our_mission'>{t('Our_Mission')}</span> {t('Mission_Competitive_Agriculture')}</div>
            <div className='our_mission_text_continue'>{t('Mission_Digitize_Agriculture')}</div>
          </div>
        </div>
        <div className='mission_text_container'>
          <div className='mission_text_item'>{t('Accessible_Agriculture')}</div>
          <div className='mission_text_item'>{t('Advanced_Tech_Opportunities')}</div>
          <div className='mission_text_item'>{t('Unite_Agro_Community')}</div>
          <div className='mission_text_item'>{t('Platform_For_Dialogue')}</div>
        </div>
        <div className='mission_button_container'>
          <div className='mission_button' onClick={props.handleOpenModal}>
            <div className='mission_button_text'>{t('Join')}</div>
            <img className="mvp_button" src={arrow} alt="MVP" /></div>
        </div>
      </div>
    ) : (
      <div className='mission_all_container'>
        <div className='mission_content_container'>
          <div className='our_mission_text_container'>
            <div className='our_mission_text'><span className='our_mission'>{t('Our_Mission')}</span> {t('Mission_Competitive_Agriculture')}</div>
            <div className='our_mission_text_continue'>{t('Mission_Digitize_Agriculture')}</div>
          </div>
          <div className='mission_button_container'>
            <div className='mission_button' onClick={props.handleOpenModal}>
              <div className='mission_button_text'>{t('Join')}</div>
              <img className="mvp_button" src={arrow} alt="MVP" /></div>
          </div>
        </div>
        <div className='mission_text_container'>
          <div className='mission_text_item'>{t('Accessible_Agriculture')}</div>
          <div className='mission_text_item'>{t('Advanced_Tech_Opportunities')}</div>
          <div className='mission_text_item'>{t('Unite_Agro_Community')}</div>
          <div className='mission_text_item'>{t('Platform_For_Dialogue')}</div>
        </div>
      </div>
    )}

  </div>;
});

export default Mission;