import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import General from './components/general';
import AboutUs from './components/about_us';
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
import ModalMvp from './components/modal_mvp';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const useIsAtBottom = (threshold: number = 0) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isBottom = scrollTop + windowHeight >= documentHeight - threshold;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isAtBottom;
};

interface ISectionRefs {
  id: number;
  ref: React.RefObject<HTMLDivElement | null>;
  tip: string;
  nameUa: string;
  namePl: string;
  nameJp: string;
}

const sectionRefs: ISectionRefs[] = [
  { id: 1, ref: React.createRef<HTMLDivElement>(), tip: 'Головна', nameUa: 'Головна', namePl: 'Головна', nameJp: 'Головна' },
  { id: 2, ref: React.createRef<HTMLDivElement>(), tip: 'Про нас', nameUa: 'Про нас', namePl: 'Про нас', nameJp: 'Про нас' },
  { id: 3, ref: React.createRef<HTMLDivElement>(), tip: 'Агроасистент', nameUa: 'AgroAssistantAI', namePl: 'AgroAssistantAI', nameJp: 'AgroAssistantAI' },
  { id: 4, ref: React.createRef<HTMLDivElement>(), tip: 'Технологічні карти', nameUa: 'Технологічні карти', namePl: 'Технологічні карти', nameJp: 'Технологічні карти' },
  { id: 5, ref: React.createRef<HTMLDivElement>(), tip: 'Екосистема', nameUa: 'Екосистема', namePl: 'Екосистема', nameJp: 'Екосистема' },
  { id: 6, ref: React.createRef<HTMLDivElement>(), tip: 'Місії та цілі', nameUa: 'Місії та цілі', namePl: 'Місії та цілі', nameJp: 'Місії та цілі' },
  { id: 7, ref: React.createRef<HTMLDivElement>(), tip: 'Переваги', nameUa: 'Переваги', namePl: 'Переваги', nameJp: 'Переваги' },
  { id: 8, ref: React.createRef<HTMLDivElement>(), tip: 'Наші цінності', nameUa: 'Наші цінності', namePl: 'Наші цінності', nameJp: 'Наші цінності' },
  { id: 9, ref: React.createRef<HTMLDivElement>(), tip: 'Партнери', nameUa: 'Партнери', namePl: 'Партнери', nameJp: 'Партнери' },
  { id: 10, ref: React.createRef<HTMLDivElement>(), tip: 'Команда', nameUa: 'Команда', namePl: 'Команда', nameJp: 'Команда' },
  { id: 11, ref: React.createRef<HTMLDivElement>(), tip: 'Контакти', nameUa: 'Контакти', namePl: 'Контакти', nameJp: 'Контакти' },
];

const languagesList = ['UA', 'EN', 'JP'];

function App() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('UA');
  const [menuLangOpen, setMenuLangOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const isAtBottom = useIsAtBottom(50); // Поріг 50 пікселів до кінця
  const [hasReachedBottom, setHasReachedBottom] = useState(false); // Чи користувач досягав низу
  const [open, setOpen] = useState(false);

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sectionRefs.forEach((section) => {
      const element = section.ref.current;
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom && activeSection !== section.id) {
          setActiveSection(section.id);
        }
      }
    });
  };

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  const scrollToSection = (id: number) => {
    const section = sectionRefs.find((s) => s.id === id);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (sectionRefs && sectionRefs.length) {
      scrollToSection(1);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Логіка, коли користувач доскролив до кінця або піднявся вище
  useEffect(() => {
    if (isAtBottom) {
      // Користувач доскролив до кінця (або до 50 пікселів від кінця)
      setHasReachedBottom(true);
      console.log("Користувач доскролив до кінця сторінки!");
    } else if (hasReachedBottom) {
      // Перевіряємо, чи користувач піднявся вище 50 пікселів від низу
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom > 50) {
        console.log("Користувач піднявся вище 50 пікселів від низу!");
        setHasReachedBottom(false); // Скидаємо стан, щоб повторно виявляти досягнення низу
      }
    }
  }, [isAtBottom, hasReachedBottom]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <div className="header">
              <div className="header_left_side">
                <div className='logo_header_container'>
                  <img onClick={() => scrollToSection(1)} className="logo" src={logoLight} alt="Sperow Logo" />
                </div>
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
                  <div className='top_button_testing' onClick={handleOpenModal}>
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
            <div className={hasReachedBottom ? "side-navigation side-navigation_hide" : "side-navigation"}>
              <ul className="side-navigation__content">
                {sectionRefs.map((section) => (
                  section.id === sectionRefs[sectionRefs.length - 1].id ? undefined :
                    <li onClick={() => scrollToSection(section.id)} key={section.id} className={activeSection && activeSection === section.id ? "side-navigation__item side-navigation__item_active" : "side-navigation__item"}>
                      <a className={activeSection && activeSection == section.id ? "side-navigation__link side-navigation__link_active" : "side-navigation__link"}>
                        <span className="test">{section.id}</span>
                        <div className="side-navigation__title">{section.tip}</div>
                      </a>
                    </li>
                ))}
              </ul>
            </div>
            <div className="content">
              <General ref={sectionRefs[0].ref} />
              <AboutUs ref={sectionRefs[1].ref} />
              <AgroAi ref={sectionRefs[2].ref} handleOpenModal={handleOpenModal} />
              <TechCard ref={sectionRefs[3].ref} />
              <Ecosystem ref={sectionRefs[4].ref} />
              <Mission ref={sectionRefs[5].ref} handleOpenModal={handleOpenModal} />
              <Advantages ref={sectionRefs[6].ref} />
              <Values ref={sectionRefs[7].ref} />
              <Partners ref={sectionRefs[8].ref} />
              <Command ref={sectionRefs[9].ref} />
              <Footer scrollToSection={scrollToSection} handleOpenModal={handleOpenModal} ref={sectionRefs[10].ref} />
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
                {sectionRefs.map((section) =>
                section.id === sectionRefs[sectionRefs.length - 1].id ? undefined :
                  (<div onClick={() => scrollToSection(section.id)} className='menu_item'>{section.nameUa}</div>)
                )}
              </div>
            </Backdrop>

            <ModalMvp open={open} handleClose={handleCloseModal} />
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;