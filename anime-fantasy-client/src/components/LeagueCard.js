import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router';


const LeagueCard = ({ leagues }) => {

    // console.log('Leagues names', leagues);
    const { user } = useContext(UserContext)
    const [leagueCard, setLeagueCard] = useState(leagues)
    const history = useNavigate()

    function handleDelete(leagueId) {
        fetch(`/league/${leagueId}`, {method: 'DELETE',})
        .then(r => r.json())
        .then(deletedLeague => setLeagueCard(leagueCard.filter(lc => lc.id !== deletedLeague.id)))
    }

    // console.log('Leagues Invitations Data INSIDE LeagueCard:', leagues[0]?.league_characters);

    const leagueMapped = () => {
        return leagues.map((league) => (
            <>
                <div className=' shadow-md bg-white rounded-lg box-border hover:bg-blue-400 hover:-translate-y-3 duration-500 h-300 w-96 p-4 px-8 pt-6 pb-8 my-12' onClick={() => history(`/anime-league/${league.id}`)}>
                    <div className='hover:text-blue-50'>                        
                        <h1 key={league.id} className='hover:text-blue-50 text-blue-600 text-xs font-bold px-2 py-2'>{league.name}</h1>
                        <h3 className='text-blue-600 text-xs font-bold px-2 py-2'>
                            Members: {league.invitations.map((i) => {return `${i.member.username}\r\n`;})}                    
                        </h3>
                        { user.id === league.creator_id ? <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-400 hover:text-blue-600 text-blue-50 text-xs font-bold px-2 py-2' onClick={() => handleDelete(league.id)} type='submit' value='Delete'/> : ''}
                        <br/>
                        { user.id === league.creator_id ? 'EDIT' : ''}
                    </div>
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
