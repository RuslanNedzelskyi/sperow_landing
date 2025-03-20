import { forwardRef } from 'react';
import Olya from '../assets/images/Olya.svg';
import Evgen from '../assets/images/Evgen.svg';
import Illya from '../assets/images/Illya.svg';
import Kyril from '../assets/images/Kyril.svg';
import Victoria from '../assets/images/Victoria.svg';
import OlyaEn from '../assets/images/Olya_en.svg';
import EvgenEn from '../assets/images/Evgen_en.svg';
import IllyaEn from '../assets/images/Illya_en.svg';
import KyrilEn from '../assets/images/Kyril_en.svg';
import VictoriaEn from '../assets/images/Victoria_en.svg';
import { useTranslation } from "react-i18next";

const Command = forwardRef<HTMLDivElement>((props, ref) => {
  const { t, i18n } = useTranslation();

  return <div ref={ref} className="command_page">
    <div className='three_images_container'>
      <div className='command_image_container'>
        <img className="command_image" src={i18n.language === 'uk' ? Kyril : KyrilEn} alt="Kyril" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={i18n.language === 'uk' ? Illya : IllyaEn} alt="Illya" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={i18n.language === 'uk' ? Victoria : VictoriaEn} alt="Victoria" />
      </div>
    </div>
    <div className='two_images_container'>
      <div className='command_image_container'>
        <img className="command_image" src={i18n.language === 'uk' ? Olya : OlyaEn} alt="Olya" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={i18n.language === 'uk' ? Evgen : EvgenEn} alt="Evgen" />
      </div>
    </div>
  </div>;
});

export default Command;