import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
      
    return (
        <div>
            <NavLink to='/'>  
            Home
            </NavLink>
            <NavLink to='/anime-fantasy'>  
            Anime Fantasy
            </NavLink>
        </div>
    )
}

export default NavBar
