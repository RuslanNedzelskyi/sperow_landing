import React, { forwardRef } from 'react';

const Values = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="values_page">Вміст Values</div>;
});

export default Values;
