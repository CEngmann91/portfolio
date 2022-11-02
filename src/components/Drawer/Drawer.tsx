// https://orbit.kiwi/components/overlay/drawer/react/
import './Drawer.scss';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LINKS, NAVIGATION } from '../../constants/constants';


const itemVariants = {
    closed: {
        x: 200,
        opacity: 0,
    },
    open: {
        x: 0,
        opacity: 1,
    }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.07,
            staggerDirection: -1,
        }
    },
    open: {
        transition: {
            staggerChildren: 0.07,
            staggerDirection: 1,
        }
    }
};


interface iProps {
    // Set id for Modal
    id?: string;
    // The width of the Modal.
    width?: string | number;
}
const Drawer: React.FC<iProps> = (props: iProps) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const show = () => {
        // Prevents scrolling whilst the menu is visible.
        document.body.style.overflow = "hidden";
        setMenuVisible(true);
    }

    const hide = () => {
        document.body.style.overflow = "scroll";
        setMenuVisible(false);
    }

    const toggleVisibility = () => !menuVisible ? show() : hide();




    return (
        <div className='app__drawer'>
            <div className="app__drawer--menuBtn-container">
                <button className='app__box-shadow-indent' onClick={toggleVisibility} data-menuVisible={menuVisible}>
                    <i />
                </button>
            </div>


            <AnimatePresence>
                {menuVisible && (
                    <motion.div
                        className='app__drawer--panel'
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        exit={{
                            width: 0,
                            transition: {
                                delay: 0.7,
                                duration: 0.2,
                                type: 'spring'
                            }
                        }}
                    >
                        {/* {props.links.length} */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            {/* {props.links.map(({ name, to }, index) => ( */}
                            {NAVIGATION.ROUTE.map(({ title, to }, index) => (
                                <motion.a
                                    key={index}
                                    href={`#${to}`}
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                    onClick={hide}
                                >{title}</motion.a>
                            ))}
                        </motion.div>


                        <a href={LINKS.RESUME} className="app__drawer--resume" target="_blank" rel="noreferrer">{".résumé();"}</a>

                    </motion.div>
                )}
            </AnimatePresence>

            {menuVisible && (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.85 }}
                    className='app__drawer--overlay'
                    onClick={hide}
                />
            )}
        </div>
    )
}

export default Drawer