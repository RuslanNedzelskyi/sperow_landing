import { Button, FormControl, Modal, TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { forwardRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

interface IModal {
    open: boolean;
    handleClose: () => void;
}

const ModalMvp = forwardRef<HTMLDivElement, IModal>((props, ref) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: ''
    });

    const handleChangePhone = (newValue: string) => {
        setFormData(prev => ({ ...prev, phone: newValue }));
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const to: string = 'sperow.ai.24@gmail.com';
    const  subject: string = 'Test';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const templateParams = {
            to_email: 'sperow.ai.24@gmail.com',
            subject: 'Test',
            message: 'name:' + formData.fullName + ', number: ' + formData.phone + ', email: ' + formData.email,
        };

        emailjs
            .send(
                'service_v6vmwp8', // Замініть на ваш Service ID
                'template_ncf9l6k', // Замініть на ваш Template ID
                templateParams,
                'x_887UQaHB8kpl8RJ' // Замініть на ваш Public Key
            )
            .then(
                (result) => {
                    debugger;
                },
                (error) => {
                    debugger;
                }
            );

        props.handleClose();
    };

    // const handleSubmitGoogle = async (e: any) => {
    //     e.preventDefault();

    //     const message: string = 'name:' + formData.fullName + ', number: ' + formData.phone + ', email: ' + formData.email;

    //     try {
    //       const response = await axios.post('http://localhost:5000/send-email', {
    //         to,
    //         subject,
    //         message,
    //       });

    //       debugger;
    //     //   setMessage(response.data);
    //     } catch (error) {
    //         debugger;
    //     //   setMessage('Error: ' + error.message);
    //     }
    //   };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            props.handleClose();
        }
    };

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            onClick={handleModalClick}
        >
            <div className="modal-content">
                <FormControl component="form" onSubmit={handleSubmit}>
                    <div className='modal_title'>Давайте зростати разом</div>
                    <div className='modal_subtitle'>Заповніть заявку на тестування MVP і ми звʼяжемось з Вами</div>

                    <div className='modal_text_fields_container'>
                        <div className='modal_text_container'>
                            <TextField
                                slotProps={{ htmlInput: { maxLength: 100 } }}
                                required
                                name="fullName"
                                className='modal_text_field'
                                id="outlined-basic"
                                label="ПІБ"
                                variant="outlined"
                                value={formData.fullName}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className='modal_text_container'>
                            <MuiTelInput
                                slotProps={{ htmlInput: { maxLength: 18 } }}
                                value={formData.phone}
                                onChange={handleChangePhone}
                                required
                                name="phone"
                                className='modal_text_field'
                                id="outlined-basic"
                                label="Номер телефону"
                                variant="outlined"
                            />
                        </div>
                        <div className='modal_text_container last'>
                            <TextField
                                slotProps={{ htmlInput: { maxLength: 150 } }}
                                name="email"
                                className='modal_text_field'
                                id="outlined-basic"
                                label="Електронна пошта"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>
                    <div className='modal_button_container'>
                        <Button
                            type="submit"
                            className='modal_button'
                            variant="contained"
                        >
                            Відправити заявку
                        </Button>
                    </div>
                </FormControl>
            </div>
        </Modal>
    );
});

export default ModalMvp;