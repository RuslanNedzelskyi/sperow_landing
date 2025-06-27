import { forwardRef, Ref, useState } from 'react';
import '.././App.css';
import backgroundVideo from '../assets/videos/sperow_background_video.mp4';
import LogoNameSvg from '../assets/images/logo_name.svg';
import { useTranslation } from "react-i18next";
import { useDeviceType } from '../hooks/useDeviceType';
import ModalMvp from './modal_mvp';

interface IGeneralProps {
}

const General = forwardRef<HTMLDivElement, IGeneralProps>((props, ref: Ref<HTMLDivElement>) => {
    const { t, i18n } = useTranslation();
    const deviceType = useDeviceType();
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

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
                <div className='logo_sub_name'>{t('Agro_Innovations')}</div>

                {deviceType === 'mobile' ? (
                    <div className='top_button_testing_container'>
                        <div className='top_button_testing' onClick={handleOpenModal}>
                            {t("Testing")}
                        </div>
                    </div>
                ) : (
                    <span></span>
                )}
            </div>
            <ModalMvp open={open} handleClose={handleCloseModal} />
        </div>
    );
});

export default General;
