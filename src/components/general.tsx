import { forwardRef, Ref } from 'react';
import '.././App.css';
import backgroundVideo from '../assets/videos/sperow_background_video.mp4';
import LogoNameSvg from '../assets/images/logo_name.svg';

interface IGeneralProps {
}

const General = forwardRef<HTMLDivElement, IGeneralProps>((props, ref: Ref<HTMLDivElement>) => {
    return (
        <div className='general_page' ref={ref}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
            >
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="content-overlay">
                <div className="logo-name-container">
                    <img src={LogoNameSvg} alt="Overlay SVG" className="svg-overlay" />
                </div>
                <div className='logo_sub_name'>ІННОВАЦІЇ В АГРОСЕКТОРІ - ЦЕ ЗРОЗУМІЛО ТА БЕЗПЕЧНО</div>
            </div>
        </div>
    );
});

export default General;
