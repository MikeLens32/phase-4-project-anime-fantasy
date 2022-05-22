import React, { useState, useEffect } from 'react';
import '../css/Battle.css'
import { BattleAnnoucer } from './BattleAnnoucer';
import BattleMenu from './BattleMenu';
import CharacterSummary from './CharacterSummary';
import { oppStats, userStats } from './TestCharacter'
import { useAIOppenent } from './useAIOppenent';
import { useBattleSequence } from './UseBattleSequence';

const Battle = () => {
    const [ sequence, setSequence ] = useState({})

    const {
        turn,
        inSequence,
        userHealth,
        oppHealth,
        announcerMessage,
        userAnimation,
        oppAnimation
    } = useBattleSequence(sequence)

    const aiChoice = useAIOppenent(turn)

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice })
        }
    }, [turn, aiChoice, inSequence])

    return (
        <>
            <div className='opponent flex flex-cols gap-1 w-full p-1'>
                <div className='summary flex items-stetch'>
                <CharacterSummary 
                    damage={oppHealth}
                    health={oppStats.health}
                    name={oppStats.name}
                    stamina={oppStats.stamina}
                />
                </div>
            </div>
            <div className='characters' >
                <div className='gameHeader'>
                    {userStats.name} vs {oppStats.name}
                </div>

                <div className='gameImages'>
                    <div className='playerSprite'>
                        <img className={[userAnimation]} src={require('../assets/Characers-05.png')} alt={userStats.alt}/>
                    </div>

                    <div className='opponentSprite'>
                        <img className={[oppAnimation]} src={require('../assets/Characers-15.png')} alt={oppStats.alt}/>
                    </div>
                </div>
            </div>
            <div className='user'>
                <div className='summary'>
                    <CharacterSummary 
                        user
                        damage={userHealth}
                        health={userStats.health}
                        name={userStats.name}
                        stamina={userStats.stamina}
                    />
                </div>
                
                <div className='hud'>

                    <div className='hudChild'>
                        <BattleAnnoucer  
                        message={announcerMessage  || `What will ${userStats.name} do?`}/>
                    </div>
                    
                    <div className='hudChild'>
                        <BattleMenu user
                        onAttack={() => setSequence({ turn, mode: 'attack'})}
                        onUltimate={() => setSequence({ turn, mode: 'ultimate'})}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Battle
