import React, { forwardRef } from 'react';
import logoLight from '../assets/images/logo_light.svg';
import telegram from '../assets/images/telegram.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';
import { useTranslation } from "react-i18next";

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
  name: string;
}

const firstMenu: IMenuItem[] = [
  { id: 2, name: 'About_Us' },
  { id: 3, name: 'Agroassistant' },
  { id: 4, name: 'Process_Maps' },
  { id: 5, name: 'Ecosystem' },
  { id: 6, name: 'Missions_Goals' }
];

const secondMenu: IMenuItem[] = [
  { id: 7, name: 'Advantages' },
  { id: 8, name: 'Our_Values' },
  { id: 9, name: 'Partners' },
  { id: 10, name: 'Team' },
];

// const Footer = forwardRef<HTMLDivElement, IFooterProps>((props, ref) => {
const Footer = forwardRef<HTMLDivElement, IFooterProps>((props) => {
  const { t, i18n } = useTranslation();

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
            firstMenu.map(item => <div onClick={() => handleScrollToSerction(item.id)} className='container_menu_item'>{t(item.name)}</div>)
          }
        </div>
        <div className='second_menu_container'>
          {
            secondMenu.map(item => <div onClick={() => handleScrollToSerction(item.id)} className='container_menu_item'>{t(item.name)}</div>)
          }
        </div>
      </div>
      <div className='contact_testing_button_container'>
        <div className='contact_testing_button' onClick={props.handleOpenModal}>{t('Testing')}</div>
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
