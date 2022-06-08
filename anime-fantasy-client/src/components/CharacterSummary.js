import React from 'react'
import CharacterBars from './CharacterBars'

const CharacterSummary = ({ user = false,  name, damage, health, stamina}) => {

    const darkGray = '#52525b'
    const liteGray = '#a1a1aa'
    console.log("CharacterSummary", {damage, health, stamina})

    return (
        <div style={{ background: user ? darkGray : liteGray }} className='main rounded-lg flex flex-col justify-between shadow-md round box-border w-80 h-34 p-4 px-8 pt-6 border'>
            <div className='info flex justify-between w-80'>
                <div className='name text-lg'>{name}</div>
            </div>
            <div className='health text-sm'>
                <CharacterBars label={health} value={damage} maxValue={health} />
                <div className='stamina'>{stamina}</div>
            </div>
        </div>
    )
}

export default CharacterSummary
