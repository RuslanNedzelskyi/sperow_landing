import { forwardRef, useRef, useEffect, useState } from 'react';
import arrowLeft from '../assets/images/arrow_left.svg';
import arrowRight from '../assets/images/arrow_right.svg';
import armar from '../assets/images/armar.svg';
import agrarka from '../assets/images/agrarka.svg';
import agroednist from '../assets/images/agroednist.svg';
import kivi from '../assets/images/kivi.svg';
import profspilka from '../assets/images/profspilka.svg';
import servig from '../assets/images/servig.svg';

const images = [
  armar,
  agrarka,
  agroednist,
  kivi,
  profspilka,
  servig,
];

const Partners = forwardRef<HTMLDivElement>((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const totalImages = images.length;
  const imagesPerView = 2; // Скільки картинок видно одночасно

  const scrollLeft = () => {
    // Якщо досягли початку, переходимо до кінця
    const newIndex = currentIndex === 0 ? totalImages - imagesPerView : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsUserInteracting(true);
  };

  const scrollRight = () => {
    // Якщо досягли кінця, переходимо до початку
    const newIndex = currentIndex === totalImages - imagesPerView ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsUserInteracting(true);
  };

  // Оновлюємо позицію скролу при зміні currentIndex
  useEffect(() => {
    if (scrollRef.current) {
      const imageWidth = scrollRef.current.querySelector(".first_partner_container")?.clientWidth || 650;
      scrollRef.current.scrollTo({
        left: currentIndex * imageWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout;

    if (!isUserInteracting) {
      autoScrollInterval = setInterval(() => {
        scrollRight();
      }, 1000); // 3 секунди
    }

    return () => clearInterval(autoScrollInterval); // Очищаємо інтервал при розмонтуванні
  }, [isUserInteracting]);

  // Відновлення автоскролу після 5 секунд бездіяльності
  useEffect(() => {
    let resetInteractionTimeout: NodeJS.Timeout;

    if (isUserInteracting) {
      resetInteractionTimeout = setTimeout(() => {
        setIsUserInteracting(false); // Відновлюємо автоскрол після 5 секунд
      }, 2000); // 5 секунд бездіяльності
    }

    return () => clearTimeout(resetInteractionTimeout);
  }, [isUserInteracting]);

  return (
    <div ref={ref} className="partners_page">
      <h2 className="partners_title">Партнери, що довіряють нам</h2>
      <div className="partners_section">
        <button className="arrow_left_img_container" onClick={scrollLeft}>
          <img src={arrowLeft} alt="Arrow Left" className="arrow_left_img" />
        </button>
        <div className="partners_container" ref={scrollRef}>
          {images.map((image, index) => (
            <div key={index} className="first_partner_container">
              <img src={image} alt={`Partner ${index + 1}`} className={index === 2 ? "scroll_image with_width" : "scroll_image"} />
            </div>
          ))}
        </div>
        <button className="arrow_right_img_container" onClick={scrollRight}>
          <img src={arrowRight} alt="Arrow Right" className="arrow_right_img" />
        </button>
      </div>
    </div>
  );
});

export default Partners;