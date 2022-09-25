import './ContactModal.scss';
import React, { useState, useRef, useEffect } from 'react'
import RootModal from '../RootModal/RootModal';
import { InputField, TextareaField } from '../../Form';

const ContactModal = ({ shown, onClose }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    
    const FORM_ENDPOINT = "";
    const [submitted, setSubmitted] = useState(false);



    useEffect(() => {
        setSubmitted(false);
    }, [shown])


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            message: messageRef?.current?.value
        };
        console.log("Data", JSON.stringify(data));

        // if (data['name'] && data['email'] && data['message'] === "")

        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };


    return (
        <RootModal id={"Contact"}
            shown={shown}
            onClose={onClose}
            width={"100%"}
            showCloseButton={!submitted}
            closeButtonClassName="close-button"
        >
            <div className="contact__modal--content">
                {submitted ?
                    <div className='app__flex'>
                        <h1>Thank you!</h1>
                        <div>I'll be in touch soon.</div>
                        <button className='submited-close-button' onClick={onClose}>Close</button>
                    </div>
                :
                    <>
                        <header>Get In Touch</header>

                        <form
                            // action={FORM_ENDPOINT}
                            // onSubmit={handleSubmit}
                            // method="POST"
                            // target="_blank"
                            className='contact__modal--content--fields'
                        >

                            <InputField useRef={nameRef} required name="name" type="text" placeholder={"Name"} />
                            <InputField useRef={emailRef} required name="email" type="email" placeholder={"Email"} />
                            <TextareaField useRef={messageRef} required name="message2" placeholder={"Message"} />

                            {/* <input id="submit" type="submit" value="Send" onClick={handleSubmit} /> */}
                            <button className='submited-close-button' onClick={handleSubmit}>Send</button>
                        </form>
                    </>
                }
            </div>
        </RootModal>
    )
}

export default ContactModal