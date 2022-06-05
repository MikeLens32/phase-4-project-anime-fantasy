import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router';


const LeagueCard = ({leagues}) => {

    console.log('Leagues names', leagues);
    const { user } = useContext(UserContext)


    const history = useNavigate()

    console.log('Leagues Invitations Data INSIDE LeagueCard:', leagues[0]?.league_characters);

    const leagueMapped = () => {
        return leagues.map((league) => (
            <>
                <div className='grid grid-cols-3 shadow-md bg-white rounded-lg box-border hover:bg-blue-400 hover:text-blue-50 hover:-translate-y-3 duration-500 h-300 w-96 p-4 px-8 pt-6 pb-8 my-12' onClick={() => history(`/anime-league/${league.id}`)}>
                    <div>                        
                        <h1 key={league.id} className='text-blue-600 text-xs font-bold px-2 py-2'>{league.name}</h1>
                        <h3 className='text-blue-600 text-xs font-bold px-2 py-2'>
                            Members: {league.invitations.map((i) => {return ` ${i.member.username}  `;})}                    
                        </h3>
                        { user.id === league.creator_id ? 'DELETE' : ''}
                        {/* <>
                            Characters: {league.league_characters.map((lc) => { return <img src={require(`${lc.character.img}`)}/>})}
                        </> */}
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
