import React, { forwardRef } from 'react';
import values from '../assets/images/values.svg';

const Values = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="values_page">
    <div className='values_image_container'>
      <img className="values_image" src={values} alt="Values" />
    </div>
  </div>;
});

export default Values;
