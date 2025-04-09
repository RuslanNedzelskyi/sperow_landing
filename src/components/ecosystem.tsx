// import { forwardRef } from 'react';
// import ecosystemImg from '../assets/images/ecosystem_image.svg';
// import ecosystemImgEn from '../assets/images/ecosystem_image_en.svg';
// import ecosystemImgJp from '../assets/images/ecosystem_image_jp.svg';
// import ecosystem1 from '../assets/images/ecosystem_1.svg';
// import ecosystem2 from '../assets/images/ecosystem_2.svg';
// import ecosystem3 from '../assets/images/ecosystem_3.svg';
// import ecosystem4 from '../assets/images/ecosystem_4.svg';
// import ecosystem5 from '../assets/images/ecosystem_5.svg';
// import ecosystem6 from '../assets/images/ecosystem_6.svg';
// import ecosystem7 from '../assets/images/ecosystem_7.svg';
// import ecosystem8 from '../assets/images/ecosystem_8.svg';
// import ecosystem9 from '../assets/images/ecosystem_9.svg';
// import { useTranslation } from "react-i18next";

// const Ecosystem = forwardRef<HTMLDivElement>((props, ref) => {
//   const { t, i18n } = useTranslation();

//   return <div ref={ref} className="ecosystem_page">
//     <div className='ecosystem_img_container'>
//       <img className="ecosystem_img" src={i18n.language === 'jp' ? ecosystemImgJp : i18n.language === 'en' ? ecosystemImgEn : ecosystemImg} alt="Ecosystem" />
//     </div>
//     <div className='ecosystem_title'>{t('Ecosystem_Creation_Concept')} <span className='ecosystem_sperow'>{t('Sperow')}</span></div>
//     <div className='ecosystem_block_container'>
//       <div className='ecosystem_first_block'>
//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem1} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Unified_Business_System')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem2} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Automated_Business_Processes')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem3} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Decision_Making_Tools')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem4} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Specialist_Task_Management')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem5} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Notification_System')}</div>
//         </div>
//       </div>
//       <div className='ecosystem_second_block'>
//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem6} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Risk_Based_Analytics')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem7} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Automated_Documentation')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem8} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Real_Time_Business_Events')}</div>
//         </div>

//         <div className='ecosystem_item'>
//           <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem9} alt="Ecosystem" /></div>
//           <div className='ecosystem_text'>{t('Simple_Interface')}</div>
//         </div>
//       </div>
//     </div>
//   </div>;
// });

// export default Ecosystem;

import { forwardRef } from 'react';

import ecosystemImg from '../assets/images/ecosystem_image.svg';
import ecosystemImgEn from '../assets/images/ecosystem_image_en.svg';
import ecosystemImgJp from '../assets/images/ecosystem_image_jp.svg';

import ecosystem1 from '../assets/images/ecosystem_1.svg';
import ecosystem2 from '../assets/images/ecosystem_2.svg';
import ecosystem3 from '../assets/images/ecosystem_3.svg';
import ecosystem4 from '../assets/images/ecosystem_4.svg';
import ecosystem5 from '../assets/images/ecosystem_5.svg';
import ecosystem6 from '../assets/images/ecosystem_6.svg';
import ecosystem7 from '../assets/images/ecosystem_7.svg';
import ecosystem8 from '../assets/images/ecosystem_8.svg';
import ecosystem9 from '../assets/images/ecosystem_9.svg';

import { useTranslation } from "react-i18next";

const Ecosystem = forwardRef<HTMLDivElement>((props, ref) => {
  const { t, i18n } = useTranslation();

  const imageSrc = i18n.language === 'jp' ? ecosystemImgJp : i18n.language === 'en' ? ecosystemImgEn : ecosystemImg;

  return (
    <div ref={ref} className="ecosystem_page">
      <div className='ecosystem_img_container'>
        <img className="ecosystem_img" src={imageSrc} alt="Ecosystem" />
      </div>

      <div className='ecosystem_title'>
        {t('Ecosystem_Creation_Concept')} <span className='ecosystem_sperow'>{t('Sperow')}</span>
      </div>

      <div className='ecosystem_block_container'>
        <div className='ecosystem_first_block'>
          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem1} alt="Ecosystem 1" /></div>
            <div className='ecosystem_text'>{t('Unified_Business_System')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem2} alt="Ecosystem 2" /></div>
            <div className='ecosystem_text'>{t('Automated_Business_Processes')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem3} alt="Ecosystem 3" /></div>
            <div className='ecosystem_text'>{t('Decision_Making_Tools')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem4} alt="Ecosystem 4" /></div>
            <div className='ecosystem_text'>{t('Specialist_Task_Management')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem5} alt="Ecosystem 5" /></div>
            <div className='ecosystem_text'>{t('Notification_System')}</div>
          </div>
        </div>

        <div className='ecosystem_second_block'>
          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem6} alt="Ecosystem 6" /></div>
            <div className='ecosystem_text'>{t('Remote_Field_Monitoring')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem7} alt="Ecosystem 7" /></div>
            <div className='ecosystem_text'>{t('Smart_Analytics')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem8} alt="Ecosystem 8" /></div>
            <div className='ecosystem_text'>{t('Multi_Profile_Access')}</div>
          </div>

          <div className='ecosystem_item'>
            <div className='ecosystem_item_img_container'><img className="ecosystem_item_img" src={ecosystem9} alt="Ecosystem 9" /></div>
            <div className='ecosystem_text'>{t('Flexible_Access_Control')}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Ecosystem;
