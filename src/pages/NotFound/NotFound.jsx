import './NotFound.scss';
import React from 'react'
import images from '../../utils/images';
import { BackButton } from '../../components';

const NotFound = () => {
  

  return (
    <div className='app__not-found app__flex'>
      <img src={images.miltonKeynes} alt="" className='bg-image' />

      <div className='app__not-found--content'>
        <h1 className='app__not-found--content-header'>Error Code 404</h1>
        <h2 className='app__not-found--content-sub'>Oops! It looks like my jokes were so funny that you took a wrong turn.</h2>

        <div className='back-button-container'>
          <BackButton className="back-button">
            Go Back
          </BackButton>
        </div>
      </div>

    </div>
  )
}

export default NotFound