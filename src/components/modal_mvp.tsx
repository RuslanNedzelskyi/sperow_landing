// import { Button, FormControl, Modal, TextField } from '@mui/material';
// import { MuiTelInput } from 'mui-tel-input';
// import { forwardRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import axios from 'axios';

// interface IModal {
//     open: boolean;
//     handleClose: () => void;
// }

// const ModalMvp = forwardRef<HTMLDivElement, IModal>((props, ref) => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         phone: '',
//         email: ''
//     });

//     const handleChangePhone = (newValue: string) => {
//         setFormData(prev => ({ ...prev, phone: newValue }));
//     };

//     const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const to: string = 'ruslan.nedzelskyi@gmail.com';
//     const  subject: string = 'Test';

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         const templateParams = {
//             to_email: 'ruslan.nedzelskyi@gmail.com',
//             subject: 'Test',
//             message: 'name:' + formData.fullName + ', number: ' + formData.phone + ', email: ' + formData.email,
//         };

//         emailjs
//             .send(
//                 'service_xr69nqg', // Замініть на ваш Service ID
//                 'template_kttj8fu', // Замініть на ваш Template ID
//                 templateParams,
//                 'uJo0glsKzEVcsUS-Q' // Замініть на ваш Public Key
//             )
//             .then(
//                 (result) => {
//                     debugger;
//                 },
//                 (error) => {
//                     debugger;
//                 }
//             );

//         props.handleClose();
//     };

//     // const handleSubmitGoogle = async (e: any) => {
//     //     e.preventDefault();

//     //     const message: string = 'name:' + formData.fullName + ', number: ' + formData.phone + ', email: ' + formData.email;

//     //     try {
//     //       const response = await axios.post('http://localhost:5000/send-email', {
//     //         to,
//     //         subject,
//     //         message,
//     //       });

//     //       debugger;
//     //     //   setMessage(response.data);
//     //     } catch (error) {
//     //         debugger;
//     //     //   setMessage('Error: ' + error.message);
//     //     }
//     //   };

//     const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (e.target === e.currentTarget) {
//             props.handleClose();
//         }
//     };

//     return (
//         <Modal
//             open={props.open}
//             onClose={props.handleClose}
//             onClick={handleModalClick}
//         >
//             <div className="modal-content">
//                 <FormControl component="form" onSubmit={handleSubmit}>
//                     <div className='modal_title'>Давайте зростати разом</div>
//                     <div className='modal_subtitle'>Заповніть заявку на тестування MVP і ми звʼяжемось з Вами</div>

//                     <div className='modal_text_fields_container'>
//                         <div className='modal_text_container'>
//                             <TextField
//                                 slotProps={{ htmlInput: { maxLength: 100 } }}
//                                 required
//                                 name="fullName"
//                                 className='modal_text_field'
//                                 id="outlined-basic"
//                                 label="ПІБ"
//                                 variant="outlined"
//                                 value={formData.fullName}
//                                 onChange={handleChangeInput}
//                             />
//                         </div>
//                         <div className='modal_text_container'>
//                             <MuiTelInput
//                                 slotProps={{ htmlInput: { maxLength: 18 } }}
//                                 value={formData.phone}
//                                 onChange={handleChangePhone}
//                                 required
//                                 name="phone"
//                                 className='modal_text_field'
//                                 id="outlined-basic"
//                                 label="Номер телефону"
//                                 variant="outlined"
//                             />
//                         </div>
//                         <div className='modal_text_container last'>
//                             <TextField
//                                 slotProps={{ htmlInput: { maxLength: 150 } }}
//                                 name="email"
//                                 className='modal_text_field'
//                                 id="outlined-basic"
//                                 label="Електронна пошта"
//                                 variant="outlined"
//                                 value={formData.email}
//                                 onChange={handleChangeInput}
//                             />
//                         </div>
//                     </div>
//                     <div className='modal_button_container'>
//                         <Button
//                             type="submit"
//                             className='modal_button'
//                             variant="contained"
//                         >
//                             Відправити заявку
//                         </Button>
//                     </div>
//                 </FormControl>
//             </div>
//         </Modal>
//     );
// });

// export default ModalMvp;

import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalMvp: React.FC<IModalProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      fullName,
      phone,
      email,
    };

    emailjs
      .send(
        'service_38yzjzs',
        'template_2sfb3sm',
        templateParams,
        'EO8apILqnsdFS0fPW'
      )
      .then(
        (result) => {
          console.log(result.text);
          handleClose();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-content">
        <h2 className="modal-title">{t('Leave_Request')}</h2>
        <form onSubmit={sendEmail} className="modal-form">
          <TextField
            fullWidth
            required
            label={t('Full_Name')}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            margin="normal"
          />
          <MuiTelInput
            defaultCountry="UA"
            value={phone}
            onChange={setPhone}
            required
            margin="normal"
            fullWidth
          />
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {t('Send')}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalMvp;