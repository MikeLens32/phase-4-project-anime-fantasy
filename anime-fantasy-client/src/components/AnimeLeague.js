import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Battle from '../components/Battle';
import StartMenu from '../components/StartMenu';

const AnimeLeague = () => {

    const [ league, setLeague ] = useState([])
    const { id } = useParams();
    const [mode, setMode] = useState('start')

    const [ character, setCharacter] = useState({})
    const [ userStats, setUserStats ] = useState({})
    const [ oppStats, setOppStats ] = useState({})

    useEffect(() => {
        fetch(`/leagues/${id}`)
        .then(r => r.json())
        .then((leagueData) => {
            setLeague(leagueData)
            setUserStats(leagueData.league_characters[Math.floor(Math.random() * leagueData.league_characters.length)])
            setOppStats(leagueData.league_characters[Math.floor(Math.random() * leagueData.league_characters.length)])
        })
      }, [])
      console.log(league)

    return (
        <div className='h-screen w-full bg-gradient-to-r from-white to-cyan-500'>
            <div>
                <h1 key={league.id} className='text-blue-600 text-xs font-bold px-2 py-2'>{league.name}</h1>
                <h3 className='text-blue-600 text-xs font-bold px-2 py-2'>
                    Members: {league.invitations?.map((i) => {return ` ${i.member.username}  `;})}                    
                </h3>
            </div>
            <>
            <div>
                {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

                {mode === 'battle' && <Battle userStats={userStats} oppStats={oppStats} userImg={userStats.img} oppImg={oppStats.img} />}

                {mode === 'gameOver' && <>Game Over</>}
            </div>
            </>
        </div>
    )
}

export default AnimeLeague
