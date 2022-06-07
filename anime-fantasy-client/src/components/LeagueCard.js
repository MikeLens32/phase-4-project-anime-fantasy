import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router';
import EditModal from './EditModal';


const LeagueCard = ({ leagues }) => {

    // console.log('Leagues names', leagues);
    const { user } = useContext(UserContext)
    const [leagueCard, setLeagueCard] = useState(leagues)
    const [isOpen, setIsOpen] = useState(false)
    const history = useNavigate()

    function handleDelete(leagueId) {
        fetch(`/leagues/${leagueId}`, {method: 'DELETE',})
        .then(r => r.json())
        .then(deletedLeague => setLeagueCard(leagueCard.filter(lc => lc.id !== deletedLeague.id)))
    }

    // console.log('Leagues Invitations Data INSIDE LeagueCard:', leagues[0]?.league_characters);

    const leagueMapped = () => {
        return leagues.map((league) => (
            <>
                <div className=' shadow-md bg-white rounded-lg box-border hover:bg-opacity-50 hover:-translate-y-3 duration-500 h-300 max-w-3xl p-4 px-8 pt-6 pb-8 my-12' >
                    <div className='grid gird-rows-3'>                        
                        <h1 key={league.id} className='text-blue-600 text-lg font-bold px-2 py-2'>{league.name}</h1>
                        <h3 className='text-blue-600 text-xs font-bold px-2 py-2'>
                            Members: {league.invitations.map((i) => {return `  ${i.member.username}  `;})}                    
                        </h3>
                        <br/>
                        <div className='flex flex-row gap-1'>
                        { user.id === league.creator_id ? <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 cursor-pointer' onClick={() => handleDelete(league.id)} type='submit' value='DELETE'/> : null}
                        { user.id === league.creator_id ? <button className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 text-center cursor-pointer' onClick={() => setIsOpen(true)}>EDIT</button> : null}
                        <EditModal id={league.id} leagues={league} leagueCard={leagueCard} setLeagueCard={setLeagueCard} open={isOpen} close={() => setIsOpen(false)}></EditModal>
                        { user.id === league.creator_id ? <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 text-center cursor-pointer' onClick={() => history(`/anime-league/${league.id}/invitation`)}  type='sumbit' value='INVITE'/> : null}
                        <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 cursor-pointer' type='submit' value='GO PLAY' onClick={() => history(`/anime-league/${league.id}`)}/>
                        </div>
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
