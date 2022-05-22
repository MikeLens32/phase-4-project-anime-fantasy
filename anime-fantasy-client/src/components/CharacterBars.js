import React from 'react'

const CharacterBars = ({ label, value, maxValue}) => {
    return (
        <div className='main flex bg-white my-1 flex rounded box-border h-7 items-center px-1'>
            <div className='pt-4 text-black text-sm font-semibold h-12 pr-1'>{label}</div>

            <div className='max rounded flex-1 h-5 w-5/6 bg-stone-900 overflow-hidden'>
                <div className='value h-full  bg-sky-600 transition delay-150 duration 300' style={{ width: `${( value / maxValue) * 100}%`}}></div>
            </div>
        </div>
    )
}

export default CharacterBars
