import React, { useState } from 'react';
import StartMenu from '../components/StartMenu'
import Battle from '../components/Battle'

const AnimeFantasyContainer = () => {

    const [mode, setMode] = useState('start')

    return (
        <div className='py-14 w-full flex flex-wrap justify-center bg-gradient-to-r from-white to-cyan-500'>
           
            {mode === 'start' && (<StartMenu onStartClick={() => setMode('battle')}/>)}

            {mode === 'battle' && <Battle />}

            {mode === 'gameOver' && <>Game Over</>}

        </div>
    )
}

export default AnimeFantasyContainer
