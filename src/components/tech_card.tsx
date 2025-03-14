import React, { forwardRef } from 'react';

const TechCard = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="tech_card_page">Вміст TechCard</div>;
});

export default TechCard;
