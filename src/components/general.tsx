// import { forwardRef, Ref } from 'react';
// import '.././App.css';
// import backgroundVideo from '../assets/videos/sperow_background_video.mp4';
// import LogoNameSvg from '../assets/images/logo_name.svg';
// import { useTranslation } from "react-i18next";

// interface IGeneralProps {
// }

// const General = forwardRef<HTMLDivElement, IGeneralProps>((props, ref: Ref<HTMLDivElement>) => {
//     const { t, i18n } = useTranslation();

//     return (
//         <div className='general_page' ref={ref}>
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="background-video"
//             >
//                 <source src={backgroundVideo} type="video/mp4" />
//             </video>
//             <div className="content-overlay">
//                 <div className="logo-name-container">
//                     <img src={LogoNameSvg} alt="Overlay SVG" className="svg-overlay" />
//                 </div>
//                 <div className='logo_sub_name'>{t('Agro_Innovations')}</div>
//             </div>
//         </div>
//     );
// });

// export default General;


import { forwardRef, Ref } from 'react';
import '../App.css';

import backgroundVideo from '../assets/videos/sperow_background_video.mp4';
import LogoNameSvg from '../assets/images/logo_name.svg';

import { useTranslation } from "react-i18next";

interface IGeneralProps {
  handleOpenModal: () => void;
}

const General = forwardRef<HTMLDivElement, IGeneralProps>(({ handleOpenModal }, ref: Ref<HTMLDivElement>) => {
  const { t } = useTranslation();

  return (
    <div className="general_page" ref={ref}>
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="content-overlay">
        <div className="logo-name-container">
          <img src={LogoNameSvg} alt="Overlay SVG" className="svg-overlay" />
        </div>
        <div className="logo_sub_name">{t('Agro_Innovations')}</div>
        <button className="cta-button" onClick={handleOpenModal}>
          {t('Test_MVP')}
        </button>
      </div>
    </div>
  );
});

export default General;
