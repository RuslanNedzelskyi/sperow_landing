import React, { forwardRef } from 'react';
import values from '../assets/images/values.svg';
import valuesEn from '../assets/images/values_en.svg';
import valuesJp from '../assets/images/values_jp.svg';
import { useTranslation } from "react-i18next";

const Values = forwardRef<HTMLDivElement>((props, ref) => {
  const { i18n } = useTranslation();

  return <div ref={ref} className="values_page">
    <div className='values_image_container'>
      <img className="values_image" src={i18n.language === 'jp' ? valuesJp : i18n.language === 'en' ? valuesEn : values} alt="Values" />
    </div>
  </div>;
});

export default Values;
