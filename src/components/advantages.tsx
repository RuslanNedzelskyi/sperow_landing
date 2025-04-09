// import React, { forwardRef } from 'react';
// import advantagesImage from '../assets/images/advantages.jpg';
// import advantagesLeft from '../assets/images/advantages_left.svg';
// import advantagesRight from '../assets/images/advantages_right.svg';
// import advantagesLeftEn from '../assets/images/advantages_left_en.svg';
// import advantagesRightEn from '../assets/images/advantages_right_en.svg';
// import advantagesLeftJp from '../assets/images/advantages_left_jp.svg';
// import advantagesRightJp from '../assets/images/advantages_right_jp.svg';
// import { useTranslation } from "react-i18next";

// const Advantages = forwardRef<HTMLDivElement>((props, ref) => {
//   const { t, i18n } = useTranslation();

//   return <div ref={ref} className="advantages_page" style={{ backgroundImage: `url(${advantagesImage})` }}>
//     <div className='advantages_images_container'>
//       <div className='advantages_left_image_container'>
//         <img className="advantages_left_image" src={i18n.language === 'jp' ? advantagesLeftJp : i18n.language === 'en' ? advantagesLeftEn : advantagesLeft} alt="Advantages" />
//       </div>
//       <div className='advantages_title'>{t('Our_Advantages')}</div>
//       <div className='advantages_right_image_container'>
//       <img className="advantages_right_image" src={i18n.language === 'jp' ? advantagesRightJp : i18n.language === 'en' ? advantagesRightEn : advantagesRight } alt="Advantages" />
//       </div>
//     </div>
//   </div>;
// });

// export default Advantages;

import React, { forwardRef, Ref } from 'react';

import advantagesImage from '../assets/images/advantages.jpg';
import advantagesLeft from '../assets/images/advantages_left.svg';
import advantagesRight from '../assets/images/advantages_right.svg';
import advantagesLeftEn from '../assets/images/advantages_left_en.svg';
import advantagesRightEn from '../assets/images/advantages_right_en.svg';
import advantagesLeftJp from '../assets/images/advantages_left_jp.svg';
import advantagesRightJp from '../assets/images/advantages_right_jp.svg';

import { useTranslation } from "react-i18next";

const Advantages = forwardRef<HTMLDivElement>((props, ref: Ref<HTMLDivElement>) => {
  const { t, i18n } = useTranslation();

  const leftImage =
    i18n.language === 'jp' ? advantagesLeftJp :
    i18n.language === 'en' ? advantagesLeftEn :
    advantagesLeft;

  const rightImage =
    i18n.language === 'jp' ? advantagesRightJp :
    i18n.language === 'en' ? advantagesRightEn :
    advantagesRight;

  return (
    <div ref={ref} className="advantages_page" style={{ backgroundImage: `url(${advantagesImage})` }}>
      <div className='advantages_images_container'>
        <div className='advantages_left_image_container'>
          <img className="advantages_left_image" src={leftImage} alt="Advantages Left" />
        </div>

        <div className='advantages_title'>{t('Our_Advantages')}</div>

        <div className='advantages_right_image_container'>
          <img className="advantages_right_image" src={rightImage} alt="Advantages Right" />
        </div>
      </div>
    </div>
  );
});

export default Advantages;