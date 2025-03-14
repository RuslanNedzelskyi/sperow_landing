import React, { forwardRef } from 'react';

const Partners = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="partners_page">Вміст Partners</div>;
});

export default Partners;
