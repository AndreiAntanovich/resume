import React, { useState } from 'react';
import './NavBar.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { NavLink } from 'react-router-dom';
import { itemsNavBar } from '../../Types/typesNavBar';
import MenuBurger from './MenuBurger/MenuBurger'
import {CSSTransition} from 'react-transition-group'

const NavBar: React.FC = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    const [activeClass, setActiveClass] = useState(false)

    const itemsNavBar: itemsNavBar = [
        { nameRu: 'Главная', nameEng: 'Main Page', to: '/' },
        { nameRu: 'Навыки', nameEng: 'Skills', to: '/skills' },
        { nameRu: 'Опыт работы', nameEng: 'Expiriens', to: '/expirians' },
        { nameRu: 'Обо мне', nameEng: 'About me', to: '/about-me' },
        { nameRu: 'CV', nameEng: 'CV', to: '/CV' },
    ]

    function turnActiveClass() {
        setActiveClass(!activeClass)
    }
    console.log(activeClass)
    return (
        <div className={`navbar${activeClass ? " active" : ""}`}>
            <div className={`navbar-container${activeClass ? " active" : ""}`}>
                <p className='navbar-name'>Andrei <br /> Antanovich</p>
                <div onClick={() => turnActiveClass()} className='icon-container_mb'>
                    <span className={`icon-container_mb_1${activeClass ? " active" : ""}`}></span>
                    <span className={`icon-container_mb_2${activeClass ? " active" : ""}`}></span>
                </div>
                <CSSTransition
                    in={activeClass} unmountOnExit timeout={{enter:1000, exit:1000}} classNames="show_items_mb"
                > 
                    <MenuBurger arrItems={itemsNavBar} activeClass={activeClass} />
                </CSSTransition>
                <div className='item-navbar-container'>
                    {itemsNavBar.map(item => {
                        return (
                            <NavLink key={itemsNavBar.indexOf(item)} to={item.to} className={`link item-navbar ${item.nameEng}`}>
                                {item.nameEng}
                            </NavLink>
                        )
                    })}
                </div>
                <div className="navbar-sign">
                    <NavLink to='/signin' className='link navbar-signin'>
                        Sign In
                    </NavLink>
                    <NavLink to='/signup' className='link navbar-signup'>
                        Sign Up
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default NavBar;
