import './ContactModal.scss';
import React, { useState, useCallback, useEffect } from 'react'
import RootModal from '../RootModal/RootModal';

const ContactModal = ({ shown, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    const FORM_ENDPOINT = "";



    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };


    return (
        <RootModal id={"Contact"}
            shown={shown}
            onClose={onClose}
        >
            {submitted ?
                <div className='app__flex'>
                    <div>Thank you!</div>
                    <div>We'll be in touch soon.</div>
                </div>
                :
                <div className="contact__modal--content">
                    <h1 className='app__flex contact__modal--content-title'>Get In Contact With Me</h1>

                    <form
                        // action={FORM_ENDPOINT}
                        // onSubmit={handleSubmit}
                        // method="POST"
                        // target="_blank"
                        className='contact__modal--content--fields'
                    >
                        <div className='contact__modal--content--fields-name'>
                            <label>Name: </label>
                            <input type="text" placeholder="Your name" name="name" required />
                        </div>
                        <div className='contact__modal--content--fields-email'>
                            <label>Email: </label>
                            <input required type="email" placeholder="Email" name="email" />
                        </div>
                        <div className='contact__modal--content--fields-message'>
                            <label>Message: </label>
                            <textarea required placeholder="Your message" name="message" />
                        </div>
                        <div className='contact__modal--content--fields-send-button'>
                            <button type="submit">Send It!! ;)</button>
                        </div>
                    </form>


                </div>
            }
        </RootModal>
    )
}

export default ContactModal