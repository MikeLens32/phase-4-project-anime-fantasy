import React from 'react'

const StartMenu = ({ onStartClick }) => {


    return (
        <div>
            <button className='bg-white hover:bg-blue-500 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' onClick={onStartClick}>Start</button>
        </div>
    )
}

export default StartMenu
