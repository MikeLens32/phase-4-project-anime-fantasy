import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Redirect } from 'react-router-dom';
import AnimeFantasyContainer from '../container/AnimeFantasyContainer';
// import LeagueSignInForm from './LeagueSignInForm'

const AnimeLeague = () => {

    const { user } = useContext(UserContext)
    if (!user) return <Redirect to='/'/>
    // {currentUser.username}
    // ^^ got next to welcome for the user's username to appear on login

    return (
        <div className='h-screen w-full bg-gradient-to-r from-white to-cyan-500'>
            <AnimeFantasyContainer />
        </div>
    )
}

export default AnimeLeague
