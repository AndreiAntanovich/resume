import React, { useState } from 'react';
import './WelcomePage.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { typingTextAnimation } from '../../UX-UI-workers/typingTextAnimation'
import { CSSTransition } from 'react-transition-group'
import Andrey from './images/Andrey.jpg'
import { changeStatusTyping } from '../../redux/welcomPage/welcomPageSlice';

const WelcomePage: React.FunctionComponent = () => {
  const show: boolean = useAppSelector((state) => state.welcomPage.typingTextEnd)
  const dispatch = useAppDispatch()
  const arrWelcomText = ['-Hi', `-I'm Andrey`, `-I'm Full-Stack Web Developer`, `-Welcom to my site`]

  dispatch(changeStatusTyping())
  const typingAfterAnimation = () => {
    console.log('test')
    typingTextAnimation(arrWelcomText, 'welcome-page-text',300, 5000, 500, 50, 0, false );
  }

  return (
    <div className='welcome-page'>
      <div className='welcome-page-container'>
        <CSSTransition
          in={show} onEnter={typingAfterAnimation} timeout={{ enter: 500, exit: 0 }} classNames="welcome-page-static-container"
        >
          <div className='welcome-page-static-container'>
            <div className='welcome-page-photo-container'>
              <img className='welcome-page-photo' src={Andrey} />
            </div>
            <div className='welcome-page-text-container'>
              <div className='welcome-page-text'>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default WelcomePage;
