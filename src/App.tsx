import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import General from './components/general';
import AboutUs from './components/about_us';
import SideNav from './components/side_nav';
import AgroAi from './components/agro_ai';
import Footer from './components/footer';
import logoLight from './assets/images/logo_light.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TechCard from './components/tech_card';
import Ecosystem from './components/ecosystem';
import Mission from './components/mission';
import Advantages from './components/advantages';
import Values from './components/values';
import Partners from './components/partners';
import Command from './components/command';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

interface ISectionRefs {
  id: number;
  ref: React.RefObject<HTMLDivElement | null>;
  tip: string;
}

const sectionRefs: ISectionRefs[] = [
  { id: 0, ref: React.createRef<HTMLDivElement>(), tip: 'Головна' },
  { id: 1, ref: React.createRef<HTMLDivElement>(), tip: 'Про нас' },
  { id: 2, ref: React.createRef<HTMLDivElement>(), tip: 'Агроасистент' },
  { id: 3, ref: React.createRef<HTMLDivElement>(), tip: 'Технологічні карти' },
  { id: 4, ref: React.createRef<HTMLDivElement>(), tip: 'Екосистема' },
  { id: 5, ref: React.createRef<HTMLDivElement>(), tip: 'Місії та цілі' },
  { id: 6, ref: React.createRef<HTMLDivElement>(), tip: 'Переваги' },
  { id: 7, ref: React.createRef<HTMLDivElement>(), tip: 'Наші цінності' },
  { id: 8, ref: React.createRef<HTMLDivElement>(), tip: 'Партнери' },
  { id: 9, ref: React.createRef<HTMLDivElement>(), tip: 'Команда' },
  { id: 10, ref: React.createRef<HTMLDivElement>(), tip: 'Контакти' },
];

interface IMenuItem {
  id: number;
  nameUa: string;
  namePl: string;
  nameJp: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

const menuItems: IMenuItem[] = [
  { id: 1, nameUa: 'Про нас', namePl: 'Про нас', nameJp: 'Про нас', ref: React.createRef<HTMLDivElement>() },
  { id: 2, nameUa: 'AgroAssistantAI', namePl: 'AgroAssistantAI', nameJp: 'AgroAssistantAI', ref: React.createRef<HTMLDivElement>() },
  { id: 3, nameUa: 'Технологічні карти', namePl: 'Технологічні карти', nameJp: 'Технологічні карти', ref: React.createRef<HTMLDivElement>() },
  { id: 4, nameUa: 'Екосистема', namePl: 'Екосистема', nameJp: 'Екосистема', ref: React.createRef<HTMLDivElement>() },
  { id: 5, nameUa: 'Місії та цілі', namePl: 'Місії та цілі', nameJp: 'Місії та цілі', ref: React.createRef<HTMLDivElement>() },
  { id: 6, nameUa: 'Переваги', namePl: 'Переваги', nameJp: 'Переваги', ref: React.createRef<HTMLDivElement>() },
  { id: 7, nameUa: 'Наші цінності', namePl: 'Наші цінності', nameJp: 'Наші цінності', ref: React.createRef<HTMLDivElement>() },
  { id: 8, nameUa: 'Партнери', namePl: 'Партнери', nameJp: 'Партнери', ref: React.createRef<HTMLDivElement>() },
  { id: 9, nameUa: 'Команда', namePl: 'Команда', nameJp: 'Команда', ref: React.createRef<HTMLDivElement>() },
  { id: 10, nameUa: 'Контакти', namePl: 'Контакти', nameJp: 'Контакти', ref: React.createRef<HTMLDivElement>() }
];

const languagesList = ['UA', 'EN', 'JP'];

function App() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('UA');
  const [menuLangOpen, setMenuLangOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenuOverlay = () => {
    setOpenMenu(!openMenu);
  }

  const [langCurrentList, setLangCurrentList] = useState(
    languagesList.filter((x) => x !== selectedLanguage)
  );

  const handleToggleMenu = () => {
    const opened = !menuLangOpen;
    setMenuLangOpen(opened);
    setOpenMenu(false);

    if (opened) {
      setLangCurrentList(languagesList.filter((x) => x !== selectedLanguage));
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    setMenuLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuLangOpen
      ) {
        setMenuLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuLangOpen, selectedLanguage]);

  const smoothScrollToTop = function () {
    const scrollStep = window.scrollY / 20; // Крок анімації
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Швидкість анімації
  };

  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <div className="header">
              <div className="header_left_side">
                <img onClick={smoothScrollToTop} className="logo" src={logoLight} alt="Sperow Logo" />
              </div>
              <div className="header_right_side">
                <div className="dropdown_lang_container" ref={dropdownRef}>
                  <div onClick={handleToggleMenu} className="selected_lang">
                    {selectedLanguage}
                  </div>
                  <div className={menuLangOpen ? 'lang_menu opened' : 'lang_menu'}>
                    {langCurrentList.map((lang) => (
                      <div
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="lang_item"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='top_button_testing_container'>
                  <div className='top_button_testing'>
                    Тестувати MVP
                  </div>
                </div>
                <div className='top_button_menu_container'>
                  <div className='top_button_menu' onClick={handleCloseMenuOverlay}>
                    <div className='button_menu_with_hamburger'>
                      Меню
                      {openMenu ? (
                        <CloseIcon />
                      ) : (
                        <MenuIcon className='menu_icon' />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            <SideNav sectionRefs={sectionRefs} />
            <div className="content">
              <General ref={sectionRefs[0].ref} />
              <AboutUs ref={sectionRefs[1].ref} />
              <AgroAi ref={sectionRefs[2].ref} />
              <TechCard ref={sectionRefs[3].ref} />
              <Ecosystem ref={sectionRefs[4].ref} />
              <Mission ref={sectionRefs[5].ref} />
              <Advantages ref={sectionRefs[6].ref} />
              <Values ref={sectionRefs[7].ref} />
              <Partners ref={sectionRefs[8].ref} />
              <Command ref={sectionRefs[9].ref} />
              <Footer ref={sectionRefs[10].ref} />
            </div>
            <Backdrop
              sx={(theme) => ({
                zIndex: theme.zIndex.drawer + 1,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: openMenu ? '100%' : '0%',
                background: openMenu
                  ? 'linear-gradient(180deg, rgba(4, 49, 41, 0.75) 0%, rgba(4, 49, 41, 0.05) 100%)'
                  : 'transparent',
                backdropFilter: openMenu ? 'blur(5px)' : 'none',
                WebkitBackdropFilter: openMenu ? 'blur(5px)' : 'none',
                animation: openMenu
                  ? 'fillFromTop 1.5s ease-in-out forwards'
                  : 'none',
                '@keyframes fillFromTop': {
                  '0%': {
                    height: '0%',
                  },
                  '100%': {
                    height: '100%',
                  },
                },
              })}
              open={openMenu}
              onClick={handleCloseMenuOverlay}
              className='menu_overlay'
            >
              <div className='menu_container'>
                {menuItems.map((menuItem, index) =>
                  (<div ref={sectionRefs.find(x => x.id == index + 1)?.ref} className='menu_item'>{menuItem.nameUa}</div>)
                )}
              </div>
            </Backdrop>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;