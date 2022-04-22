import React from 'react';
import './App.scss';
import Skills from './Components/Skills/Skills';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/WelcomPage/WelcomePage';


const App: React.FunctionComponent = () => {
  interface Event{
    ctrlKey : boolean;
}
  // отключение zoom через скролл (в том числе трекападами в macOS)
document.addEventListener('mousewheel', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
}, {passive:false});

// отключение zoom прикосновениями (в том числе трекападами и т.п.) в Safari и iOS
document.addEventListener('gesturestart', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
}, {passive:false});

// отключение zoom через клавиатуру (ctrl + "+", ctrl + "-")
// кнопки браузера для управления zoom отключены не будут
document.addEventListener('keydown', function(e){
  if(!e.ctrlKey && !e.metaKey) return;
  if(e.keyCode != 189 && e.keyCode != 187) return;

  e.preventDefault();
  e.stopImmediatePropagation();
}, {passive:false});
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
