import './RootModal.scss';
import React, { useState, useEffect, useCallback } from 'react'
import { useScrollLock } from '../../../helpers/hooks/useScrollLock';

interface iProps {
  // Set id for Modal
  id: string;
  // The width of the Modal.
  width?: string | number;
  // The height of the Modal.
  height?: string | number;
  // If true the Modal will be visible, otherwise visually hidden, but it will stay in the DOM.
  shown: boolean;
  // The content of the Modal.
  children?: React.ReactNode;
  // Function for handling onClose event.
  onClose: (e?: React.MouseEvent<HTMLElement>) => void;
  // Whether to prevent scrolling of the rest of the page while Modal is open. This is on by default to provide a better user experience.
  lockScrolling?: boolean;
  // If true, the Modal will have cloudy background.
  suppressed?: boolean;
  dismissOnEscKey?: boolean;
  closeButtonClassName: string;
  showCloseButton?: boolean;
}
const RootModal: React.FC<iProps> = ({ id, width = '60%', height = '80vh', shown, children, onClose, lockScrolling = true, suppressed, dismissOnEscKey = true, closeButtonClassName, showCloseButton = true, ...props}: iProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const STATE = { HIDDEN: "Hidden", ANIMATING: "Animating", VISIBLE: "Visible" }
  const [state, setState] = useState(STATE.HIDDEN);



  if (shown) {
    lockScroll();
  }
  if (!shown)
  {
    unlockScroll();
  }



  /*useEffect(() => {
    if (lockScrolling && shown)
      // Prevents scrolling whilst the menu is visible.
      document.body.style.overflow = "hidden";
    if (lockScrolling && !shown)
      document.body.style.overflow = "scroll";

    // if (dismissOnEscKey && shown) {
    //   window.addEventListener('keydown', onKeyDown, true)
    //   return () => {
    //     window.removeEventListener('keydown', onKeyDown, true)
    //   }
    // }
  }, [shown])*/


  // const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   const { key } = e
  //     if (key === "Escape") {
  //       handleClose();
  //     }
  // }

  const handleClose = useCallback(() => {
    // if (lockScrolling)
    //   document.body.style.overflow = "scroll";
    setState(STATE.HIDDEN);
    onClose();
  }, [])


  if (!shown) return null;

  return (
    <main id={id}>
      <div className="overlay" onClick={handleClose}
        // onAnimationStart={event => {
        //   if (event?.animationName === "fade-in") {
        //   }
        // }}
        // onAnimationEnd={event => {
        //   if (event?.animationName === "fade-in") {
        //   }
        // }}
      />

      <div className="container"
        onAnimationStart={event => {
          // if (event?.animationName === "scale-up-bounce") {
          setState(STATE.ANIMATING);

          //  console.log(`Animation ${event?.animationName} started`)
        }}
        onAnimationEnd={event => {
          if (event?.animationName === "scale-up-bounce") {
            if (shown)
              setState(STATE.VISIBLE);
          }
          // console.log(`Animation ${event?.animationName} ended`)
        }}
        style={{ width: width }}
      >
        {showCloseButton &&
          <div className="container--closeButton-container">
            <button className={closeButtonClassName} onClick={handleClose}>X</button>
          </div>
        }
        {children}
      </div>
    </main>
  )
}

export default RootModal