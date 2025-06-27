import React, { forwardRef, useState } from 'react';
import TechCard1 from '../assets/images/macbook_tech_card_1.svg';
import TechCard2 from '../assets/images/macbook_tech_card_2.svg';
import TechCard3 from '../assets/images/macbook_tech_card_3.svg';
import TechCard4 from '../assets/images/macbook_tech_card_4.svg';
import { useTranslation } from "react-i18next";
import { useDeviceType } from '../hooks/useDeviceType';
import { useSwipeable } from 'react-swipeable';

const images = [
  TechCard1,
  TechCard2,
  TechCard3,
  TechCard4
];


const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();
  const items = [0, 1, 2, 3];
  const deviceType = useDeviceType();

  const [activeSlide, setActiveSlide] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setActiveSlide((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true,
  });

  return <div ref={ref} className="tech_card_page">
    <div className='tech_card_content_container'>
      {
        activeSlide === 0 ? <span className='tech_card_title'>{t('Process_Maps_Section')}</span> :
          activeSlide === 1 ? <span className='tech_card_title'>{t('Monitoring')}</span> :
            activeSlide === 2 ? <span className='tech_card_title with_change'>{t('Crop_Rotation_Fields')}</span> :
              <span className='tech_card_title'>{t('Weather')}</span>
      }

      {deviceType === 'mobile' ? (
        <div className='tech_card_with_img_mobile'>
          <div className='tech_card_img_container'>
            {

              <div className="slider-container" {...swipeHandlers}>
                <img src={images[activeSlide]} alt="Tech Card" className="logo_card_img slider-image" />
                <div className="slider-dots">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={i === activeSlide ? 'dot active' : 'dot'}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </div>
            }
          </div>
          <div className='tech_card_text_container'>
            {
              activeSlide === 0 ?
                <div className='tech_card_sub_text_container'>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Auto_Creation_Cost_Calculation')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Operation_Efficiency_Each_Operation')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Analysis_Recommendations')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Real_Time_Monitoring')}</span>
                  </div>
                </div> :
                activeSlide === 1 ?
                  <div className='tech_card_sub_text_container'>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Disease_Pest_Warning')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Vegetation_Tracking_Risks')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Monitoring_History')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Personal_Crop_Monitoring')}</span>
                    </div>
                  </div> :
                  activeSlide === 2 ?
                    <div className='tech_card_sub_text_container'>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Profitable_Crop_Rotation')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Next_Step_Recommendations')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Precision_Farming_Field_Map')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Field_Plot_History')}</span>
                      </div>
                    </div> :
                    <div className='tech_card_sub_text_container'>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Weather_Analysis_Forecast')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Weather_Impact_Crops')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Various_Statistics')}</span>
                      </div>
                      <div className='tech_card_text_item'>
                        <span className='tech_card_text'>{t('Moon_Phases_Signs')}</span>
                      </div>
                    </div>
            }
          </div>
        </div>
      ) : (
        <div className='tech_card_text_container'>
          {
            activeSlide === 0 ?
              <div className='tech_card_sub_text_container'>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>{t('Auto_Creation_Cost_Calculation')}</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>{t('Operation_Efficiency_Each_Operation')}</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>{t('Analysis_Recommendations')}</span>
                </div>
                <div className='tech_card_text_item'>
                  <span className='tech_card_text'>{t('Real_Time_Monitoring')}</span>
                </div>
              </div> :
              activeSlide === 1 ?
                <div className='tech_card_sub_text_container'>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Disease_Pest_Warning')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Vegetation_Tracking_Risks')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Monitoring_History')}</span>
                  </div>
                  <div className='tech_card_text_item'>
                    <span className='tech_card_text'>{t('Personal_Crop_Monitoring')}</span>
                  </div>
                </div> :
                activeSlide === 2 ?
                  <div className='tech_card_sub_text_container'>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Profitable_Crop_Rotation')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Next_Step_Recommendations')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Precision_Farming_Field_Map')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Field_Plot_History')}</span>
                    </div>
                  </div> :
                  <div className='tech_card_sub_text_container'>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Weather_Analysis_Forecast')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Weather_Impact_Crops')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Various_Statistics')}</span>
                    </div>
                    <div className='tech_card_text_item'>
                      <span className='tech_card_text'>{t('Moon_Phases_Signs')}</span>
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
      )}
    </div>
  </div>;
});

export default TechCard;