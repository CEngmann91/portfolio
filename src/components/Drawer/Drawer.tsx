// https://orbit.kiwi/components/overlay/drawer/react/
import './Drawer.scss';
import React, { useState } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { LINKS, NAVIGATION } from '../../constants/constants';
import { useEscKey } from '../../helpers/hooks/useEscKey';
import DrawerButton from './DrawerButton/DrawerButton';
import { useScrollLock } from '../../helpers/hooks/useScrollLock';

const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
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




interface iProps {
    // Set id for Modal
    id?: string;
    // The width of the Modal.
    width?: string | number;
}
const Drawer: React.FC<iProps> = ({ width = '80%' }: iProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const { lockScroll, unlockScroll } = useScrollLock();
    const [menuVisible, setMenuVisible] = useState(false);
    // const { hasEscaped } = useEscKey();



    // if (hasEscaped)
    //     dismiss();


    function show() {
        toggleOpen();
        // Prevents scrolling whilst the menu is visible.
        lockScroll();
    }

    function dismiss() {
        toggleOpen();
        unlockScroll();
    }

    const toggleVisibility = () => !isOpen ? show() : dismiss();





    const renderPanel = () => (
        <motion.div
            className='app__drawer--panel'
            initial={{ width: 0 }}
            animate={{ width: width }}
            exit={{
                width: 0,
                transition: {
                    delay: 0.7,
                    duration: 0.2,
                    type: 'spring'
                }
            }}
        >
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
                        onClick={dismiss}
                    >{title}</motion.a>
                ))}
            </motion.div>


            <a href={LINKS.RESUME} className="app__drawer--resume" target="_blank" rel="noreferrer">{".résumé();"}</a>

        </motion.div>
    )

    const renderOverlay = () => (
        <motion.div
            initial="closed"
            whileInView="open"
            exit="closed"
            transition={{ duration: 0.85 }}
            variants={overlayVariants}
            className='app__drawer--overlay'
            onClick={dismiss}
        />
    )

    return (
        <div className='app__drawer'>
            <DrawerButton isOpen={isOpen} onClick={() => toggleVisibility()} />

            <AnimatePresence>
                {isOpen && (
                    <>
                        {renderPanel()}
                        {renderOverlay()}
                    </>
                )}
            </AnimatePresence>

            {/* {menuVisible && (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.85 }}
                    exit={{ opacity: 0 }}
                    className='app__drawer--overlay'
                    onClick={dismiss}
                />
            )} */}
        </div>
    )
}

export default Drawer