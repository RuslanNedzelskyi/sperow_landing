// import React, { forwardRef } from 'react';
// import YouTube from 'react-youtube';

// const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
//   const opts = {
//     width: '80%',
//     height: '700px',
//     playerVars: {
//       autoplay: 0,
//     },
//     class: 'video_frame'
//   };

//   const onReady = (event: any) => {
//     event.target.pauseVideo();
//   };

//   return (
//     <div ref={ref} className="about_us_page">
//       <YouTube
//         videoId="xvGCIXyx1zU"
//         opts={opts}
//         onReady={onReady}
//       />
//     </div>
//   );
// });

// export default AboutUs;

import { forwardRef, Ref } from 'react';
import '../App.css';

import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

interface IAboutUsProps {
  handleOpenModal: () => void;
}

const AboutUs = forwardRef<HTMLDivElement, IAboutUsProps>(({ handleOpenModal }, ref: Ref<HTMLDivElement>) => {
  const { t } = useTranslation();

  const opts = {
    height: '700',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="about_us_page" ref={ref}>
      <h2 className="section-title">{t('About_Us')}</h2>
      <div className="about_us_video_wrapper">
        <YouTube videoId="xvGCIXyx1zU" opts={opts} className="about_us_video" />
      </div>
      <button className="cta-button" onClick={handleOpenModal}>
        {t('Test_MVP')}
      </button>
    </div>
  );
});

export default AboutUs;