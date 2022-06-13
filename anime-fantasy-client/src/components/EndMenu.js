import React from 'react'

const EndMenu = ({ onStartClick }) => {
    return (
        <div className='flex justify-center'>
            <div className='shadow-md rounded-lg bg-white round box-border h-32 w-64 p-4 px-8 pt-6 pb-8 mb-4 mt-20'>
                <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 ml-8 mt-4 border rounded focus:outline-none focus:shadow-outline' onClick={onStartClick}>Battle Again</button>
            </div>
        </div>
    )
}

export default EndMenu
