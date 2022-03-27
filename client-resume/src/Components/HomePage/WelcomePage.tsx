import React, { useState } from 'react';
import './WelcomePage.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { typingTextAnimation } from './WelcomPageServiceStyle'

const WelcomePage: React.FunctionComponent = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const arrWelcomText = ['Hi', 'My name is Andrey', `I'm Web-developer`, 'Welcome on my Web-site']

  typingTextAnimation(arrWelcomText,'welcome-page_text', 50, 1000)
  return (
    <div className='welcome-page'>
      <div className='welcome-page_container'>
        <div className='welcome-page_photo'>
        </div>
        <div className='welcome-page_text'>

        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
