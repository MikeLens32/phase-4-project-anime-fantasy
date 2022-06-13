import '../css/ALHomePage.css'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Battle from '../components/Battle';
import StartMenu from '../components/StartMenu';
import EndMenu from './EndMenu';

const AnimeLeague = () => {

    const [ league, setLeague ] = useState([])
    const { id } = useParams();
    const [mode, setMode] = useState('start')

    const [ userStats, setUserStats ] = useState({})
    const [ oppStats, setOppStats ] = useState({})
    const [ winner, setWinner ] = useState()

    useEffect(() => {
        fetch(`/leagues/${id}`)
        .then(r => r.json())
        .then((leagueData) => {
            setLeague(leagueData)
            setUserStats(leagueData.league_characters[Math.floor(Math.random() * leagueData.league_characters.length)])
            setOppStats(leagueData.league_characters[Math.floor(Math.random() * leagueData.league_characters.length)])
        })
      }, [id])

    return (
        <div className='h-screen bg-gradient-to-r from-white to-cyan-500'>
            <div className='shadow-md bg-white rounded-lg box-border h-300 max-w-3xl p-4 px-8 pt-6 pb-8 my-12'>
                <h1 key={league.id} className='text-blue-600 text-xs font-bold px-2 py-2'>{league.name}</h1>
                <h3 className='text-blue-600 text-xs font-bold px-2 py-2'>
                    Members: {league.invitations?.map((i) => {return ` ${i.member.username}  `;})}                    
                </h3>
            </div>
            <div className='flex justify-center'>
                <h1 className='title'>LETS BATTLE!</h1>
            </div>
            
            <div >
                {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

                {mode === 'battle' && <Battle userStats={userStats} oppStats={oppStats} onGameEnd={winner => {
                    setWinner(winner)
                    setMode('gameOver')}}/>}

                {mode === 'gameOver' && <EndMenu winner={winner} onStartClick={() => {
                    setWinner(undefined)
                    setMode('battle')}} />}
            </div>

        </div>
    )
}

export default AnimeLeague
