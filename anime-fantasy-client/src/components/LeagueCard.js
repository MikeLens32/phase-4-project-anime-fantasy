import React, { useState } from 'react';
import Battle from '../components/Battle';
import StartMenu from '../components/StartMenu';
// import { useNavigate } from 'react-router-dom';

const LeagueCard = ({leagues}) => {

    const [mode, setMode] = useState('start')

    const leagueMapped = () => {
        return leagues.map((league) => (
            <>
                <div className='shadow-md bg-white rounded-lg box-border hover:bg-blue-400 hover:-translate-y-3 duration-500 h-200 w-64 p-4 px-8 pt-6 pb-8 my-12'>
                    <h1 key={league.id} className='text-blue-600 hover:text-blue-50 text-xs font-bold px-2 py-2'>{league.name}</h1>
                </div>
                <div>
                    {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

                    {mode === 'battle' && <Battle />}

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
