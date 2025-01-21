'use client'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import styles from './page.module.css';

export default function Contact() {

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ stateMessage, setStateMessage ] = useState(null);
    const [ formErrors, setFormErrors ] = useState({});
    const formRef = useRef(null);

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.get('user_name')) errors.user_name = 'Name is required';
        if (!formData.get('user_email')) errors.user_email = 'Email is required';
        if (!formData.get('message')) errors.message = 'Message is required';
        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const errors = validateForm(formData);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        const userEmail = formData.get('user_email');

        emailjs.sendForm('gmail_service', 'template_x8i0eii', e.target, 'HHB-EHcuoSLC4Y1df', {
            user_email: userEmail,
        }).then((result) => {
            setStateMessage('Message sent successfully!');
            Swal.fire('Success', 'Message sent successfully!', 'success');
            setIsSubmitting(false);
            e.target.reset();
            setFormErrors({});
        }).catch((error) => {
            setStateMessage('Message failed to send, please try again later.');
            Swal.fire('Error', 'Message failed to send, please try again later.', 'error');
            setIsSubmitting(false);
        });
    };

    return <section className={styles.contactSection}>
        <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>Contact Us</h2>
            <p>Please fill out the form below to contact us.</p>

            <div className={styles.formGroup}>
                <label>Name</label>
                <motion.input
                    type="text"
                    name="user_name"
                    className={formErrors.user_name ? styles.error : ''}
                    animate={formErrors.user_name ? { x: [ 0, -10, 10, -10, 10, 0 ] } : {}}
                    transition={{ duration: 0.5 }}
                />
                <label>Email</label>
                <motion.input
                    type="email"
                    name="user_email"
                    className={formErrors.user_email ? styles.error : ''}
                    animate={formErrors.user_email ? { x: [ 0, -10, 10, -10, 10, 0 ] } : {}}
                    transition={{ duration: 0.5 }}
                />
                <label>Phone Number</label>
                <motion.input type="tel" name="user_phone" />
                <label>Message</label>
                <motion.textarea
                    name="message"
                    className={formErrors.message ? styles.error : ''}
                    animate={formErrors.message ? { x: [ 0, -10, 10, -10, 10, 0 ] } : {}}
                    transition={{ duration: 0.5 }}
                />
                <input type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
            </div>

        </motion.form>
    </section>;
}