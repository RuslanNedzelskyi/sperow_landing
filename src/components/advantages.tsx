import React, { forwardRef } from 'react';
import advantagesImage from '../assets/images/advantages.jpg';
import advantagesLeft from '../assets/images/advantages_left.svg';
import advantagesRight from '../assets/images/advantages_right.svg';

const Advantages = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="advantages_page" style={{ backgroundImage: `url(${advantagesImage})` }}>
    <div className='advantages_images_container'>
      <div className='advantages_left_image_container'>
        <img className="advantages_left_image" src={advantagesLeft} alt="Advantages" />
      </div>
      <div className='advantages_title'>Наші переваги</div>
      <div className='advantages_right_image_container'>
      <img className="advantages_right_image" src={advantagesRight} alt="Advantages" />
      </div>
    </div>
  </div>;
});

export default Advantages;