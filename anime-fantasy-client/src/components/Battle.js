import React, { useState, useEffect } from 'react';
import '../css/Battle.css'
import { BattleAnnoucer } from './BattleAnnoucer';
import BattleMenu from './BattleMenu';
import CharacterSummary from './CharacterSummary';
// import { oppStats, userStats } from './TestCharacter'
import { useAIOppenent } from './useAIOppenent';
import { useBattleSequence } from './UseBattleSequence';
// import { CharacterImage } from './CharacterImage';

const Battle = ({ oppStats, userStats, userImg, oppImg}) => {
    console.log(`oppStats: ${JSON.stringify(oppStats)}`);
    console.log(`oppStats.character.img: ${oppStats.character.img}`);
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
                    {userStats.character.name} vs {oppStats.character.name}
                </div>

                <div className='gameImages'>
                    {userStats ? (<div className='playerSprite'>
                        <img className={[userAnimation]} src={userStats.character.img} alt={userStats.alt}/>
                    </div>) : null}

                    {oppStats ? (<div className='opponentSprite'>
                        <img className={[oppAnimation]} src={oppStats.character.img} alt={oppStats.alt}/>
                    </div>) : null }
                </div>
            </div>
            <div className='user'>
                <div className='summary'>
                    {userStats ? (<CharacterSummary 
                        user
                        damage={userHealth}
                        health={userStats.health}
                        name={userStats.name}
                        stamina={userStats.stamina}
                    />) : null }
                </div>
                
                <div className='hud'>

                    <div className='hudChild'>
                        {userStats ? (<BattleAnnoucer  
                        message={announcerMessage  || `What will ${userStats.name} do?`}/>) : null}
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
