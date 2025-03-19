import { Modal } from '@mui/material';
import { forwardRef } from 'react';

interface IModal {
    open: boolean;
    handleClose: () => void;
}

const ModalMvp = forwardRef<HTMLDivElement, IModal>((props) => {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="modal-content">
                <h2>Давайте зростати разом</h2>
                <p>Заповніть заявку на тестування MVP і ми звʼяжемось з Вами</p>
                <button onClick={props.handleClose}>Відправити заявку</button>
            </div>
        </Modal>
    );
});

export default ModalMvp;