import React, { forwardRef } from 'react';

const Advantages = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="advantages_page">Вміст Advantages</div>;
});

export default Advantages;