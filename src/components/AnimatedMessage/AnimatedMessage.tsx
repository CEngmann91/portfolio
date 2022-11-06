import './AnimatedMessage.scss';
import React from 'react';
import { motion } from 'framer-motion'

interface iMessage {
    delay: number;
    children?: React.ReactNode;
    controls?: any; // 'AnimationControls/typeof useAnimation' error when used.
    // onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onStart?: () => void;
    onEnd?: () => void;
}

const AnimatedMessage: React.FC<iMessage> = ({ children, delay, controls, onStart, onEnd, ...props}: iMessage) => {
    const variantions = {
        variants: {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
        },
        duration: 1,
        delay: 0
    }

    return (
        <div className='app__anim-message'>
            <motion.div
                className="app__anim-message--text"
                variants={variantions.variants}
                animate={controls}
                initial="hidden"
                whileInView="visible"
                // Play in viewport only once.
                viewport={{ once: true }}
                transition={{
                    duration: variantions.duration,
                    delay: delay,
                }}
                onAnimationStart={() => onStart?.()}
                onAnimationComplete={() => onEnd?.()}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default AnimatedMessage