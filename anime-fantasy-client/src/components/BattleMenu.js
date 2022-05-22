import React from 'react'
import '../css/BattleMenu.css'

const BattleMenu = ({ onAttack, onUltimate }) => {


    return (
        <div className='main rounded grid gap-2 grid-rows-2 box-content '>
            <div className='option' onClick={onAttack}>Attack</div>
            <div className='option flex bg-zinc-600 hover:bg-slate-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline p-4' onClick={onUltimate}>Ultimate</div>
        </div>
    )
}

export default BattleMenu
