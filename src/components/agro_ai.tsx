import React, { forwardRef } from 'react';
import arrow from '../assets/images/arrow.svg';
import agroAi from '../assets/images/agro_ai.jpg';
import { useTranslation } from "react-i18next";
import { useDeviceType } from '../hooks/useDeviceType';

interface IAgroAiProps {
  handleOpenModal: () => void;
}

const AgroAi = forwardRef<HTMLDivElement, IAgroAiProps>((props, ref) => {
  const { t, i18n } = useTranslation();
  const deviceType = useDeviceType();

  return <div ref={ref} className="agro_ai_page">
    <div className='agro_ai_title'>{t('AgroAssistantAI')}</div>
    <div className='agro_ai_sub_title'>{t('Farmers_Right_Hand')}</div>
    <div className='agro_ai_content_container'>
      <div className='agro_ai_text_container'>
        <div className='agro_ai_text_title'>{t('All_In_One')}</div>
        <div className='agro_ai_text'>
          <div className='agro_ai_text_item'>{t("AgroAi_Text1")}</div>
          <div className='agro_ai_text_item'>{t('Plant_Growth_Monitoring')}</div>
          <div className='agro_ai_text_item'>{t('Pest_Disease_Warning')}</div>
          <div className='agro_ai_text_item'>{t('Weather_Impact_Analysis')}</div>
          <div className='agro_ai_text_item'>{t('Operation_Timing_Kaizen')}</div>
          <div className='agro_ai_text_item'>{t('Seed_Chem_Fert_Recommendation')}</div>
        </div>
        <div className='agro_ai_button_container'>
          <div onClick={props.handleOpenModal} className='agro_ai_button'>
            <div className='agro_ai_button_text'>{t('Join')}</div>
            <img className="mvp_button" src={arrow} alt="MVP" /></div>
        </div>
      </div>
      {deviceType === "desktop" ? (
        <div className='agro_ai_photo_container'>
          <img className="agro_ai_photo" src={agroAi} alt="Agro AI" />
        </div>
      ) : (
        <span></span>
      )}
    </div>
  </div>;
});

export default AgroAi;