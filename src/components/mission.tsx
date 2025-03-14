import React, { forwardRef } from 'react';

const Mission = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="mission_page">Вміст Mission</div>;
});

export default Mission;
