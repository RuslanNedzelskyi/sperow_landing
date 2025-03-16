import React, { forwardRef } from 'react';
import YouTube from 'react-youtube';

const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
  const opts = {
    width: '80%',
    height: '700px',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  return (
    <div ref={ref} className="about_us_page">
      <YouTube
        videoId="xvGCIXyx1zU"
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
});

export default AboutUs;