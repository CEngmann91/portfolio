import './RootModal.scss';
import React, { useState, useEffect, useCallback } from 'react'

const RootModal = ({ id, width = '60%', height = '80vh', shown, children, onClose, lockScrolling = true, suppressed, dismissOnEscKey = true, showCloseButton = true }) => {

  const STATE = { HIDDEN: "Hidden", ANIMATING: "Animating", VISIBLE: "Visible" }
  const [state, setState] = useState(STATE.HIDDEN);



  useEffect(() => {
    if (lockScrolling && shown)
      // Prevents scrolling whilst the menu is visible.
      document.body.style.overflow = "hidden";

    if (dismissOnEscKey && shown) {
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    }
  }, [shown])


  const onKeyDown = (e) => {
    if (e.code === "Escape") handleClose();
  };

  const handleClose = useCallback(() => {
    if (lockScrolling)
      document.body.style.overflow = "scroll";
    setState(STATE.HIDDEN);
    onClose();
  }, [])


  if (!shown) return null;

  return (
    <main id={id}>
      <div className="overlay" onClick={handleClose}
        onAnimationStart={event => {
          if (event?.animationName === "fade-in") {
          }
        }}
        onAnimationEnd={event => {
          if (event?.animationName === "fade-in") {
          }
        }}
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
            <button onClick={handleClose}>X</button>
          </div>
        }
        {children}
      </div>
    </main>
  )
}

export default RootModal