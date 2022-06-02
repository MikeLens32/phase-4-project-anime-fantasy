import React, { useState, useEffect } from 'react';

const AnimeLeague = () => {

    const [ league, setLeague ] = useState([])

    useEffect(() => {
        fetch(`/leagues`)
        .then(r => r.json())
        .then((leagueData) => setLeague(leagueData))
      }, [])
      console.log(league)

    return (
        <div className='h-screen w-full bg-gradient-to-r from-white to-cyan-500'>

        </div>
    )
}

export default AnimeLeague
