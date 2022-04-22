import React, { useState } from 'react';
import './NavBar.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { NavLink } from 'react-router-dom';
import { itemsNavBar } from '../../Types/typesNavBar';
import MenuBurger from './MenuBurger/MenuBurger'
import { CSSTransition } from 'react-transition-group'
import { typingTextAnimation } from '../../UX-UI-workers/typingTextAnimation';

const NavBar: React.FC = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    const [activeClass, setActiveClass] = useState(false)

    const itemsNavBar: itemsNavBar = [
        { nameRu: 'Главная', nameEng: 'Welcome Page', to: '/' },
        { nameRu: 'Навыки', nameEng: 'Skills', to: '/skills' },
        { nameRu: 'Опыт работы', nameEng: 'Expiriens', to: '/expirians' },
        { nameRu: 'Обо мне', nameEng: 'About me', to: '/about-me' },
        { nameRu: 'О сайте', nameEng: 'About the site', to: '/aboutsite' },
    ]

    const NBText:string[] = [
        'Andrey Antanovich'
    ]

    typingTextAnimation(NBText,'navbar-name',50, 5000, 0, 20, 0, false)
    function turnActiveClass() {
        setActiveClass(!activeClass)
    }
    return (
        <div className={`navbar${activeClass ? " active" : ""}`}>
            <div className={`navbar-container${activeClass ? " active" : ""}`}>
                <div className='navbar-name'>
                </div>
                <div onClick={() => turnActiveClass()} className='icon-container_mb'>
                    <span className={`icon-container_mb_1${activeClass ? " active" : ""}`}></span>
                    <span className={`icon-container_mb_2${activeClass ? " active" : ""}`}></span>
                </div>
                <div className='item-navbar-container'>
                    {itemsNavBar.map(item => {
                        return (
                            <NavLink key={itemsNavBar.indexOf(item)} to={item.to} className={`link item-navbar ${item.nameEng}`}>
                                {item.nameEng}
                            </NavLink>
                        )
                    })}
                </div>
                <i className="material-icons  md-36 md-no_active ">account_circle</i>
                <div className="navbar-sign">
                    <NavLink to='/signin' className='link navbar-signin'>
                        Sign In
                    </NavLink>
                    <NavLink to='/signup' className='link navbar-signup'>
                        Sign Up
                    </NavLink>
                </div>
            </div>
            <CSSTransition
                    in={activeClass} unmountOnExit timeout={{ enter: 500, exit: 500 }} classNames="show_items_mb"
                >
                    <MenuBurger arrItems={itemsNavBar} activeClass={activeClass} />
                </CSSTransition>


        </div>
    );
}

export default NavBar;
