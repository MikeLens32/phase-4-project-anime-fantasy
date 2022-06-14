import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import image from '../assets/LOGO-02.png'
import  { NavLink } from 'react-router-dom';

export default function NavBar() {

    const { user, signout } = useContext(UserContext)

    return (
        <div className='w-full h-10 bg-blue-400 text-gray-200 flex flex-row justify-between items-center'>
            {!user ? <div className='brand-logo text-sm font-bold px-2'>Anime Fantasy</div> : <div className='brand-logo text-sm font-bold px-2'>{user.username}</div> }
            {user ? (<ul className='memu-list flex flex-row text-xs font-bold px-2'>
                <li className='menu-list-item px-2'>
                    <NavLink to='/home'>  
                        Home
                    </NavLink>
                </li>
                <li className='menu-list-item px-2'>
                    <NavLink to='/anime-fantasy'>  
                        League
                    </NavLink> 
                </li>
                    <li className='menu-list-item px-2'>
                    <button onClick={signout}>  
                        Logout
                    </button> 
                </li>
            </ul>) : null}

            <button className='1g:hidden menu-button'>
                <NavLink to='/'>  
                    <img className='h-8 w-8' src={image} alt='A-F Logo'/> 
                </NavLink>
            </button>
        </div>
    )
}

