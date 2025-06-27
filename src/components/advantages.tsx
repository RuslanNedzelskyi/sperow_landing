import React, { forwardRef } from 'react';
import advantagesImage from '../assets/images/advantages.jpg';
import advantagesLeft from '../assets/images/advantages_left.svg';
import advantagesRight from '../assets/images/advantages_right.svg';
import advantagesLeftEn from '../assets/images/advantages_left_en.svg';
import advantagesRightEn from '../assets/images/advantages_right_en.svg';
import advantagesLeftJp from '../assets/images/advantages_left_jp.svg';
import advantagesRightJp from '../assets/images/advantages_right_jp.svg';

import advantages1 from '../assets/images/advantages_1.svg';
import advantages2 from '../assets/images/advantages_2.svg';
import advantages3 from '../assets/images/advantages_3.svg';
import advantages4 from '../assets/images/advantages_4.svg';

import { useTranslation } from "react-i18next";
import { useDeviceType } from '../hooks/useDeviceType';

const Advantages = forwardRef<HTMLDivElement>((props, ref) => {
  const { t, i18n } = useTranslation();
  const deviceType = useDeviceType();

  return <div ref={ref} className="advantages_page" style={{ backgroundImage: `url(${advantagesImage})` }}>
    {deviceType === 'mobile' ? (
      <div className='advantages_all_container'>
        <div className='advantages_title'>{t('Our_Advantages')}</div>
        <div className='advantages_row'>
          <div className='advantages_container'>
            <div className='advantages_image_container'>
              <img className="advantages_image" src={advantages1} alt="Advantages" />
            </div>
            <div className='advantages_text_container'>
              <div className='advantages_sub_title'>{t('Advantages_Title_1')}</div>
              <div className='advantages_text'>{t('Advantages_1')}</div>
            </div>
          </div>

          <div className='advantages_container'>
            <div className='advantages_image_container'>
              <img className="advantages_image" src={advantages2} alt="Advantages" />
            </div>
            <div className='advantages_text_container'>
              <div className='advantages_sub_title'>{t('Advantages_Title_2')}</div>
              <div className='advantages_text'>{t('Advantages_2')}</div>
            </div>
          </div>
        </div>
        <div className='advantages_row'>
          <div className='advantages_container'>
            <div className='advantages_image_container'>
              <img className="advantages_image" src={advantages3} alt="Advantages" />
            </div>
            <div className='advantages_text_container'>
              <div className='advantages_sub_title'>{t('Advantages_Title_3')}</div>
              <div className='advantages_text'>{t('Advantages_3')}</div>
            </div>
          </div>

          <div className='advantages_container'>
            <div className='advantages_image_container'>
              <img className="advantages_image" src={advantages4} alt="Advantages" />
            </div>
            <div className='advantages_text_container'>
              <div className='advantages_sub_title'>{t('Advantages_Title_4')}</div>
              <div className='advantages_text'>{t('Advantages_4')}</div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='advantages_images_container'>
        <div className='advantages_left_image_container'>
          <img className="advantages_left_image" src={i18n.language === 'jp' ? advantagesLeftJp : i18n.language === 'en' ? advantagesLeftEn : advantagesLeft} alt="Advantages" />
        </div>
        <div className='advantages_title'>{t('Our_Advantages')}</div>
        <div className='advantages_right_image_container'>
          <img className="advantages_right_image" src={i18n.language === 'jp' ? advantagesRightJp : i18n.language === 'en' ? advantagesRightEn : advantagesRight} alt="Advantages" />
        </div>
      </div>
    )}
  </div>;
});

export default Advantages;