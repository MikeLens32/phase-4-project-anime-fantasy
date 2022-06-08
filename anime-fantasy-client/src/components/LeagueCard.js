import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router';

const LeagueCard = ({ leagues, setLeagues }) => {

    const { user } = useContext(UserContext)
    const history = useNavigate()

    function handleDelete(leagueId) {
        console.log(`deleting league with id: ${leagueId}`)
        
        fetch(`/leagues/${leagueId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }            
        })
        .then(() => {
            const filterLeagues = leagues.filter(lc => lc.id !== leagueId);
            console.log(`filterLeagues: ${JSON.stringify(filterLeagues)}`);
            setLeagues(filterLeagues);
        })
    }

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
                        { user.id === league.creator_id ? <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 text-center cursor-pointer' onClick={() => history(`/anime-league/${league.id}/edit`)} type='submit' value='EDIT'/> : null}
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
