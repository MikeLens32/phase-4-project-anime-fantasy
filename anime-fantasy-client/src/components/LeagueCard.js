import React, { useState, useEffect } from 'react';
import Battle from '../components/Battle';
import StartMenu from '../components/StartMenu';
// import { useNavigate } from 'react-router-dom';

const LeagueCard = ({leagues}) => {

    console.log('Leagues names', leagues);

    const [mode, setMode] = useState('start')

    const [ character, setCharacter] = useState({})
    const [ userStats, setUserStats ] = useState({})
    const [ oppStats, setOppStats ] = useState({})

    useEffect(() => {
        fetch('/characters')
        .then(r => r.json())
        .then(userCharacterData => {
            setCharacter(userCharacterData)
            console.log('UserCharacterData',userCharacterData)
            // setUserStats(userCharacterData[2])
            // setOppStats(userCharacterData[10])
            setUserStats(userCharacterData[Math.floor(Math.random() * userCharacterData.length)])
            setOppStats(userCharacterData[Math.floor(Math.random() * userCharacterData.length)])
            console.log('User:', userStats, 'Opp:', oppStats)
            console.log('img:', userStats.img)
            console.log('Leagues Invitation',leagues)
            // debugger
        })
    }, [leagues])

    console.log('Leagues Invitations Data INSIDE LeagueCard:', leagues[0]?.invitations);

    const leagueMapped = () => {
        return leagues.map((league) => (
            <>
                <div className='shadow-md bg-white rounded-lg box-border hover:bg-blue-400 hover:-translate-y-3 duration-500 h-200 w-64 p-4 px-8 pt-6 pb-8 my-12'>
                    <h1 key={league.id} className='text-blue-600 hover:text-blue-50 text-xs font-bold px-2 py-2'>{league.name}</h1>
                </div>
                <div>
                    Inviations: {league.invitations.map((i) => {
                        return `Member: ${i.member.username}`;
                    })}                    
                </div>
                <div>
                    {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

                    {mode === 'battle' && <Battle userStats={userStats} oppStats={oppStats} userImg={userStats.img} oppImg={oppStats.img} />}

                    {mode === 'gameOver' && <>Game Over</>}
                </div>
            </>
                ))}

    return (
        <div >
            {leagueMapped()}
        </div>
    )
}

export default LeagueCard
