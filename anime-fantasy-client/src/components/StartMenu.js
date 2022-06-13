import React from 'react'

const StartMenu = ({ onStartClick }) => {

    

    return (
        <div className='h-screen w-full bg-gradient-to-r from-white to-cyan-500'>
            <button className='bg-white hover:bg-blue-500 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' onClick={onStartClick}>Start</button>
        </div>
    )
}

export default StartMenu
