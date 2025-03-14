// components/SideNav.tsx
import React, { useState, useEffect } from 'react';
import '.././App.css';

interface ISectionRefs {
  ref: React.RefObject<HTMLDivElement | null>,
  tip: string
}

// Інтерфейс для пунктів меню
interface NavItem {
  id: number;
  label: string;
  tip: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface SideNavProps {
  sectionRefs: Array<ISectionRefs>; // Масив рефів для секцій
}

const SideNav: React.FC<SideNavProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections: NavItem[] = Array.from({ length: sectionRefs.length }, (_, i) => ({
    id: i + 1,
    label: `${String(i + 1)}`,
    tip: sectionRefs[i].tip,
    ref: sectionRefs[i].ref,
  }));

  useEffect(() => {
    // Цей код виконається лише один раз при монтуванні компонента
    if (sections && sections.length) {
      setActiveSection(sections[0].id);
    }
  }, []);

  // Відстежуємо прокрутку для визначення активного розділу
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Центр екрану
      sections.forEach((section) => {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);

              // Прокрутка до нижньої межі секції
              window.scrollTo({
                top: offsetBottom - window.innerHeight, // Початок секції залишається нагорі екрану
                behavior: 'smooth', // Плавна прокрутка
              });
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Функція для скролінгу до секції
  const scrollToSection = (id: number) => {
    const section = sections.find((s) => s.id === id);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className={sections && sections.length && activeSection && activeSection == sections.at(-1)?.id ? "side-navigation side-navigation_hide" : "side-navigation"}>
      <ul className="side-navigation__content">
        {sections.map((section) => (
          <li onClick={() => scrollToSection(section.id)} key={section.id} className={activeSection && activeSection === section.id ? "side-navigation__item side-navigation__item_active" : "side-navigation__item"}>
            <a className={activeSection && activeSection == section.id ? "side-navigation__link side-navigation__link_active" : "side-navigation__link"}>
              <span className="test">{section.label}</span>
              <div className="side-navigation__title">{section.tip}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;