import React, { forwardRef } from 'react';

const Ecosystem = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="ecosystem_page">Вміст Ecosystem</div>;
});

export default Ecosystem;
