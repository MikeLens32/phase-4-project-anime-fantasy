import React, { useState, useEffect } from 'react'
import AnimeFantasyContainer from '../container/AnimeFantasyContainer'
import LeagueSignInForm from './LeagueSignInForm'

const AnimeLeague = () => {

    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        fetch('/me')
        .then((r) =>{
            if(r.ok){
                r.json().then(user => setCurrentUser(user))
            }
        })
    },[])

    if(!currentUser) return <LeagueSignInForm loggedOn={setCurrentUser}/>
    
    return (
        <div>
            <h1>Anime Fantansy</h1>
            <h3>Welcome {currentUser.username}</h3>
            <AnimeFantasyContainer />
        </div>
    )
}

export default AnimeLeague
