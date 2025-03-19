import React, { forwardRef } from 'react';
import logoLight from '../assets/images/logo_light.svg';
import telegram from '../assets/images/telegram.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';

interface IFooterProps {
  scrollToSection: (id: number) => void;
  handleOpenModal: () => void;
}

const telegramUrl: string = 'https://t.me/K_Horobets';
const instagramUrl: string = 'https://www.instagram.com/founder_sperow?igsh=MXdyaTJ3ZTRhM3dodw==';
const facebookUrl: string = 'https://www.facebook.com/profile.php?id=100012050228493';
const youtubeUrl: string = 'https://youtube.com/@sperowai?si=A7LZS8KaFqgS-tv6';

interface IMenuItem {
  id: number;
  nameUa: string;
  namePl: string;
  nameJp: string;
}

const firstMenu: IMenuItem[] = [
  { id: 2, nameUa: 'Про нас', namePl: 'Про нас', nameJp: 'Про нас' },
  { id: 3, nameUa: 'AgroAssistant', namePl: 'AgroAssistant', nameJp: 'AgroAssistant' },
  { id: 4, nameUa: 'Технологічні карти', namePl: 'Технологічні карти', nameJp: 'Технологічні карти' },
  { id: 5, nameUa: 'Екосистема', namePl: 'Екосистема', nameJp: 'Екосистема' },
  { id: 6, nameUa: 'Місії та цілі', namePl: 'Місії та цілі', nameJp: 'Місії та цілі' }
];

const secondMenu: IMenuItem[] = [
  { id: 7, nameUa: 'Переваги', namePl: 'Переваги', nameJp: 'Переваги' },
  { id: 8, nameUa: 'Наші цінності', namePl: 'Наші цінності', nameJp: 'Наші цінності' },
  { id: 9, nameUa: 'Партнери', namePl: 'Партнери', nameJp: 'Партнери' },
  { id: 10, nameUa: 'Команда', namePl: 'Команда', nameJp: 'Команда' },
];

// const Footer = forwardRef<HTMLDivElement, IFooterProps>((props, ref) => {
const Footer = forwardRef<HTMLDivElement, IFooterProps>((props) => {
  const handleScrollToSerction = (idSection: number) => {
    props.scrollToSection(idSection);
  }

  // return <div ref={ref} className="footer_page">
  return <div className="footer_page">
    <div className='contact_text_container'>
      <div className='contact_text_with_icon'>
        <div className='logo_contact_container'>
          <img onClick={() => handleScrollToSerction(1)} className="logo" src={logoLight} alt="Sperow Logo" />
        </div>
        <div className='contact_information_container'>
          <div className='email_information'>sperow.ai.24@gmail.com</div>
          <div className='phone_number_information'>+380950188344</div>
        </div>
      </div>
      <div className='contact_menu_container'>
        <div className='first_menu_container'>
          {
            firstMenu.map(item => <div onClick={() => handleScrollToSerction(item.id)} className='container_menu_item'>{item.nameUa}</div>)
          }
        </div>
        <div className='second_menu_container'>
          {
            secondMenu.map(item => <div onClick={() => handleScrollToSerction(item.id)} className='container_menu_item'>{item.nameUa}</div>)
          }
        </div>
      </div>
      <div className='contact_testing_button_container'>
        <div className='contact_testing_button' onClick={props.handleOpenModal}>Тестувати MVP</div>
      </div>
    </div>
    <div className='social_media_container'>
      <div className='social_media_icons'>
        <a href={facebookUrl} target="_blank" className='social_media_icon_container'>
          <img className="social_media_icon" src={facebook} alt="Facebook" />
        </a>
        <a href={instagramUrl} target="_blank" className='social_media_icon_container'>
          <img className="social_media_icon" src={instagram} alt="Instagram" />
        </a>
        <a href={telegramUrl} target="_blank" className='social_media_icon_container'>
          <img className="social_media_icon" src={telegram} alt="Telegram" />
        </a>
        <a href={youtubeUrl} target="_blank" className='social_media_icon_container'>
          <img className="social_media_icon" src={youtube} alt="Youtube" />
        </a>
      </div>
      <div className='social_media_text'>COPYRIGHT ©2025 SPEROW. ALL RIGHTS RESERVED.</div>
    </div>
  </div>;
});

export default Footer;
