import './HeartFeltMessage.scss';
import React from 'react'
import AnimatedMessage from '../AnimatedMessage/AnimatedMessage';

const message = {
    content: [
        <h2 className="head-text">{'<'}Do What <span>You Love,</span></h2>,
        <h2 className="head-text">Love What <span>You Do{`/>`}</span></h2>
    ],
    variants: {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
    },
    duration: 1,
    delay: 0
}
const HeartFeltMessage = () => {
    return (
        <div className='app__flex main'>
            {message.content.map((paragraph, index) => (
                <AnimatedMessage key={index} delay={(index * 1.5)}>
                    {paragraph}
                </AnimatedMessage>
            ))}
        </div>
    )
}

export default HeartFeltMessage