import React from 'react';
import './App.css';
import Skills from './Components/Skills/Skills';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/HomePage/WelcomePage';


const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className='container-navbar'>
        <NavBar />
      </div>
      <div className="container-Components">
        <Routes>
          <Route path='/' element={<WelcomePage />}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
