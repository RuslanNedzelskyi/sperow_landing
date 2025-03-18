import { forwardRef } from 'react';
import Olya from '../assets/images/Olya.svg';
import Evgen from '../assets/images/Evgen.svg';
import Illya from '../assets/images/Illya.svg';
import Kyril from '../assets/images/Kyril.svg';
import Victoria from '../assets/images/Victoria.svg';

const Command = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} className="command_page">
    <div className='three_images_container'>
      <div className='command_image_container'>
        <img className="command_image" src={Kyril} alt="Kyril" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={Illya} alt="Illya" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={Victoria} alt="Victoria" />
      </div>
    </div>
    <div className='two_images_container'>
      <div className='command_image_container'>
        <img className="command_image" src={Olya} alt="Olya" />
      </div>
      <div className='command_image_container'>
        <img className="command_image" src={Evgen} alt="Evgen" />
      </div>
    </div>
  </div>;
});

export default Command;