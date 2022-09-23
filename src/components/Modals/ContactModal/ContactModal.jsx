import './ContactModal.scss';
import React, { useState, useRef, useEffect } from 'react'
import RootModal from '../RootModal/RootModal';
import { InputField, TextareaField } from '../../Form';

const ContactModal = ({ shown, onClose }) => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();
    const [submitted, setSubmitted] = useState(false);

    const FORM_ENDPOINT = "";




    useEffect(() => {
        setSubmitted(false);
    }, [shown])


    const handleSubmit = (e) => {
        e.preventDefault();

        // if (nameInputRef.current.value && emailInputRef.current.value && messageInputRef.current.value === "")
        /*if (messageInputRef.current.value === "")
        {
            messageInputRef.current.focus();
            return;
        }*/

        // setTimeout(() => {
        //     setSubmitted(true);
        // }, 100);
        setSubmitted(true);
    };


    return (
        <RootModal id={"Contact"}
            shown={shown}
            onClose={onClose}
            width={"100%"}
            showCloseButton={!submitted}
        >
            <div className="contact__modal--content">
                {submitted ?
                    <div className='app__flex'>
                        <div>Thank you!</div>
                        <div>We'll be in touch soon.</div>
                        <button onClick={onClose}>Close</button>
                    </div>
                :
                    <>
                        <header>Get In Contact With Me</header>

                        <form
                            // action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            // method="POST"
                            // target="_blank"
                            className='contact__modal--content--fields'
                        >
                            <InputField required name="name" type="text" placeholder={"Name"} ref={nameInputRef} />
                            <InputField required name="email" type="email" placeholder={"Email"} ref={emailInputRef} />
                            <TextareaField required name="message2" placeholder={"Message"} ref={messageInputRef} />

                            <input id="submit" type="submit" value="Send" onClick={handleSubmit} />
                        </form>
                    </>
                }
            </div>
        </RootModal>
    )
}

export default ContactModal