import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, NavLink } from 'react-router-dom';


const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className='container-navbar'>
        <NavBar/>
      </div>
      <div className="container-Components">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
