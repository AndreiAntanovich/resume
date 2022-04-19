import React, { useState } from 'react';
import './WelcomePage.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { typingTextAnimation } from '../../UX-UI-workers/typingTextAnimation'
import { CSSTransition } from 'react-transition-group'
import Andrey from './images/Andrey.jpg'

const WelcomePage: React.FunctionComponent = () => {
  const changeStatusTyping: boolean = useAppSelector((state) => state.welcomPage.typingTextEnd)
  const dispatch = useAppDispatch()
  const arrWelcomText = ['Hi', `I'm Andrey`, `I'm web-developer`, `Welcom to my site`]



  typingTextAnimation(arrWelcomText, 'welcome-page-text-typing',500, 500, 1000, 50, 25, true, dispatch )

  return (
    <div className='welcome-page'>
      <div className='welcome-page-container'>
        <CSSTransition
          in={changeStatusTyping} unmountOnExit timeout={{ enter: 2000, exit: 2000 }} classNames="welcome-page-static-container"
        >
          <div className='welcome-page-static-container'>
            <div className='welcome-page-photo-container'>
              <img className='welcome-page-photo' src={Andrey} />
            </div>
            <div className='welcome-page-text-container'>
              <p className='welcome-page-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio nam aspernatur libero provident. Quae, aliquam fugiat velit, asperiores aut odit totam dignissimos neque omnis provident doloribus inventore repellat hic.
              </p>
            </div>
          </div>
        </CSSTransition>
        <div className='welcome-page-text-typing'>
        </div>

      </div>
    </div>
  );
}

export default WelcomePage;
