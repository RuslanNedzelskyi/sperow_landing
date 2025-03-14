import React, { forwardRef } from 'react';

const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="about_us_page">Вміст About Us</div>;
});

export default AboutUs;