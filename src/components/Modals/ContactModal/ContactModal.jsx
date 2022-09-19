import './ContactModal.scss';
import React, { useState, useCallback, useEffect } from 'react'

const ContactModal = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen)
            // Prevents scrolling whilst the menu is visible.
            document.body.style.overflow = "hidden";
    }, [isOpen])


    const close = useCallback(() => {
        document.body.style.overflow = "scroll";

        onClose()
    }, [])




    const FORM_ENDPOINT = "";

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (!isOpen) return null;

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }



    return (
        <div className="app__modal">
            <div className="overlay" onClick={close} />            

            <div className="container">
                <div className="container--closeButton-container">
                    <button onClick={close}>X</button>
                </div>

                <div className="content">
                    <h1>Get In Contact With Me</h1>

                    <form
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                        target="_blank"
                    >
                        <div>
                            <label>Name: </label>
                            <input type="text" placeholder="Your name" name="name" required />
                        </div>
                        <div>
                            <input required type="email" placeholder="Email" name="email" />
                        </div>
                        <div>
                            <textarea required placeholder="Your message" name="message" />
                        </div>
                        <div>
                            <button type="submit">
                                Send a message
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    )
}

export default ContactModal