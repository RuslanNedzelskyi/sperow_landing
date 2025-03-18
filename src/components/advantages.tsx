import React, { forwardRef } from 'react';
import advantagesImage from '../assets/images/advantages.jpg';

const Advantages = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="advantages_page" style={{ backgroundImage: `url(${advantagesImage})` }}></div>;
});

export default Advantages;