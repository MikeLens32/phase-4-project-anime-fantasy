import React, { useState } from 'react';
import StartMenu from '../components/StartMenu'
import Battle from '../components/Battle'

const AnimeFantasyContainer = () => {

    const [mode, setMode] = useState('start')

    return (
        <div className='py-14 w-full flex flex-wrap justify-center'>
            <div className='w-full items-center'>
                <h1>Anime Fantansy</h1>
                <h3>Welcome </h3>
            </div>
           
            {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

            {mode === 'battle' && <Battle />}

            {mode === 'gameOver' && <>Game Over</>}

        </div>
    )
}

export default AnimeFantasyContainer
