import React, { useState, useEffect } from 'react'
import AnimeFantasyContainer from '../container/AnimeFantasyContainer'
import SignIn from './SignIn'

const AnimeLeague = () => {

    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        fetch('/me')
        .then(r =>{
            if(r.ok){
                r.json().then(user => setCurrentUser(user))
            }
        })
    }, [])

    if(!currentUser) return <SignIn loggedOn={setCurrentUser}/>
    
    return (
        <div>
            <h1>Anime Fantansy</h1>
            <AnimeFantasyContainer />
        </div>
    )
}

export default AnimeLeague
