import React, { forwardRef } from 'react';

const AgroAi = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="agro_ai_page">Вміст AgroAi</div>;
});

export default AgroAi;