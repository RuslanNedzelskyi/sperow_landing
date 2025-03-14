import React, { forwardRef } from 'react';

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="footer_page">Вміст Footer</div>;
});

export default Footer;
