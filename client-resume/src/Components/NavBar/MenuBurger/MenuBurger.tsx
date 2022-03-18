import React, { useState } from 'react';
import './MenuBurger.scss';
import { TNavBar } from '../../../Types/typesNavBar'
import { NavLink } from 'react-router-dom';


const MenuBerger: React.FunctionComponent<TNavBar> = ({ arrItems, activeClass }) => {

    return (
        <div className='item-navbar-container_mb'>
            {arrItems.map(item => {
                return (
                    <NavLink to={item.to} key={arrItems.indexOf(item)} className={`link item-navbar_mb ${item.nameEng}`}>
                        {item.nameEng}
                    </NavLink>
                )
            })}
        </div>
    );
}

export default MenuBerger;
