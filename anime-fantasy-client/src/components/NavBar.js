import React from 'react';
import image from '../assets/LOGO-02.png'
import {NavLink} from 'react-router-dom';

export default function NavBar() {
      
    return (
        <div className='fixed w-full h-10 bg-blue-400 text-gray-200 flex flex-row justify-between items-center'>
            <div className='brand-logo text-sm font-bold px-2'>Anime Fantasy</div>
            <ul className='memu-list flex flex-row text-xs font-bold px-2'>
                <li className='menu-list-item px-2'>
                    <NavLink to='/'>  
                    Home
                    </NavLink>
                </li>
                <li className='menu-list-item px-2'>
                    <NavLink to='/anime-fantasy'>  
                    League
                    </NavLink> 
                </li>
            </ul>

            <button className='1g:hidden menu-button'>
                <NavLink to='/'>  
                    <img className='h-8 w-8' src={image} alt='A-F Logo'/> 
                </NavLink>
            </button>
        </div>
    )
}

