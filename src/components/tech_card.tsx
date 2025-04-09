// import React, { forwardRef, useState } from 'react';
// import TechCard1 from '../assets/images/macbook _tech_card_1.svg';
// import TechCard2 from '../assets/images/macbook _tech_card_2.svg';
// import TechCard3 from '../assets/images/macbook _tech_card_3.svg';
// import TechCard4 from '../assets/images/macbook _tech_card_4.svg';
// import { useTranslation } from "react-i18next";

// const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
//   const { t } = useTranslation();
//   const items = [0, 1, 2, 3];
//   const [activeSlide, setActiveSlide] = useState(0);

//   return <div ref={ref} className="tech_card_page">
//     <div className='tech_card_content_container'>
//       {
//         activeSlide === 0 ? <span className='tech_card_title'>{t('Process_Maps_Section')}</span> :
//           activeSlide === 1 ? <span className='tech_card_title'>{t('Monitoring')}</span> :
//             activeSlide === 2 ? <span className='tech_card_title with_change'>{t('Crop_Rotation_Fields')}</span> :
//               <span className='tech_card_title'>{t('Weather')}</span> 
//       }

//       <div className='tech_card_text_container'>
//         {
//           activeSlide === 0 ?
//             <div className='tech_card_sub_text_container'>
//               <div className='tech_card_text_item'>
//                 <span className='tech_card_text'>{t('Auto_Creation_Cost_Calculation')}</span>
//               </div>
//               <div className='tech_card_text_item'>
//                 <span className='tech_card_text'>{t('Operation_Efficiency_Each_Operation')}</span>
//               </div>
//               <div className='tech_card_text_item'>
//                 <span className='tech_card_text'>{t('Analysis_Recommendations')}</span>
//               </div>
//               <div className='tech_card_text_item'>
//                 <span className='tech_card_text'>{t('Real_Time_Monitoring')}</span>
//               </div>
//             </div> :
//             activeSlide === 1 ?
//               <div className='tech_card_sub_text_container'>
//                 <div className='tech_card_text_item'>
//                   <span className='tech_card_text'>{t('Disease_Pest_Warning')}</span>
//                 </div>
//                 <div className='tech_card_text_item'>
//                   <span className='tech_card_text'>{t('Vegetation_Tracking_Risks')}</span>
//                 </div>
//                 <div className='tech_card_text_item'>
//                   <span className='tech_card_text'>{t('Monitoring_History')}</span>
//                 </div>
//                 <div className='tech_card_text_item'>
//                   <span className='tech_card_text'>{t('Personal_Crop_Monitoring')}</span>
//                 </div>
//               </div> :
//               activeSlide === 2 ?
//                 <div className='tech_card_sub_text_container'>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Profitable_Crop_Rotation')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Next_Step_Recommendations')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Precision_Farming_Field_Map')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Field_Plot_History')}</span>
//                   </div>
//                 </div> :
//                 <div className='tech_card_sub_text_container'>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Weather_Analysis_Forecast')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Weather_Impact_Crops')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Various_Statistics')}</span>
//                   </div>
//                   <div className='tech_card_text_item'>
//                     <span className='tech_card_text'>{t('Moon_Phases_Signs')}</span>
//                   </div>
//                 </div>
//         }


//         <div className='tech_card_img_container'>
//           {
//             activeSlide === 0 ?
//               <img className="logo_card_img" src={TechCard1} alt="Tech Card" /> :
//               activeSlide === 1 ?
//                 <img className="logo_card_img" src={TechCard2} alt="Tech Card" /> :
//                 activeSlide === 2 ?
//                   <img className="logo_card_img" src={TechCard3} alt="Tech Card" /> :
//                   <img className="logo_card_img" src={TechCard4} alt="Tech Card" />
//           }
//           <div className='menu_slides_container'>
//             {items.map((item, index) => (
//               <div onClick={() => setActiveSlide(index)} key={item} className={activeSlide === index ? 'menu-item active' : 'menu-item'}></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>;
// });

// export default TechCard;

import React, { forwardRef, useState, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

import TechCard1 from '../assets/images/macbook _tech_card_1.svg';
import TechCard2 from '../assets/images/macbook _tech_card_2.svg';
import TechCard3 from '../assets/images/macbook _tech_card_3.svg';
import TechCard4 from '../assets/images/macbook _tech_card_4.svg';

const TechCard = forwardRef<HTMLDivElement>((props, ref: Ref<HTMLDivElement>) => {
  const { t } = useTranslation();
  const items = [0, 1, 2, 3];
  const [activeSlide, setActiveSlide] = useState(0);

  const renderTexts = () => {
    switch (activeSlide) {
      case 0:
        return (
          <>
            <div className='tech_card_text_item'>{t('Auto_Creation_Cost_Calculation')}</div>
            <div className='tech_card_text_item'>{t('Operation_Efficiency_Each_Operation')}</div>
            <div className='tech_card_text_item'>{t('Analysis_Recommendations')}</div>
            <div className='tech_card_text_item'>{t('Real_Time_Monitoring')}</div>
          </>
        );
      case 1:
        return (
          <>
            <div className='tech_card_text_item'>{t('Disease_Pest_Warning')}</div>
            <div className='tech_card_text_item'>{t('Vegetation_Tracking_Risks')}</div>
            <div className='tech_card_text_item'>{t('Monitoring_History')}</div>
            <div className='tech_card_text_item'>{t('Personal_Crop_Monitoring')}</div>
          </>
        );
      case 2:
        return (
          <>
            <div className='tech_card_text_item'>{t('Profitable_Crop_Rotation')}</div>
            <div className='tech_card_text_item'>{t('Next_Step_Recommendations')}</div>
            <div className='tech_card_text_item'>{t('Soil_Analysis_Past_Data')}</div>
          </>
        );
      case 3:
        return (
          <>
            <div className='tech_card_text_item'>{t('Weather_Prediction')}</div>
            <div className='tech_card_text_item'>{t('Drought_Frost_Alerts')}</div>
            <div className='tech_card_text_item'>{t('Historical_Weather_Analysis')}</div>
          </>
        );
      default:
        return null;
    }
  };

  const renderImage = () => {
    switch (activeSlide) {
      case 0: return TechCard1;
      case 1: return TechCard2;
      case 2: return TechCard3;
      case 3: return TechCard4;
      default: return TechCard1;
    }
  };

  const renderTitle = () => {
    switch (activeSlide) {
      case 0: return t('Process_Maps_Section');
      case 1: return t('Monitoring');
      case 2: return t('Crop_Rotation_Fields');
      case 3: return t('Weather');
      default: return '';
    }
  };

  return (
    <div className='tech_card_page' ref={ref}>
      <div className='tech_card_content_container'>
        <span className={`tech_card_title ${activeSlide === 2 ? 'with_change' : ''}`}>{renderTitle()}</span>
        <div className='tech_card_slider_controls'>
          {items.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <div className='tech_card_flex_container'>
          <div className='tech_card_text_container'>
            <div className='tech_card_sub_text_container'>
              {renderTexts()}
            </div>
          </div>
          <div className='tech_card_image_container'>
            <img src={renderImage()} alt='tech card' className='tech_card_image' />
          </div>
        </div>
      </div>
    </div>
  );
});

export default TechCard;
