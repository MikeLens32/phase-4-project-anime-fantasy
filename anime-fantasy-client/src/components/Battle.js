import '../css/Battle.css'
import BattleMenu from './BattleMenu';
import React, { useState, useEffect } from 'react';
import { wait } from './Helpers'
import { BattleAnnoucer } from './BattleAnnoucer';
import CharacterSummary from './CharacterSummary';
import { useAIOppenent } from './useAIOppenent';
import { useBattleSequence } from './UseBattleSequence';

const Battle = ({ oppStats, userStats, onGameEnd }) => {
    
    const [ sequence, setSequence ] = useState({})
    const {
        turn,
        inSequence,
        userHealth,
        oppHealth,
        announcerMessage,
        userAnimation,
        oppAnimation
    } = useBattleSequence({sequence, oppStats, userStats})

    const aiChoice = useAIOppenent(turn)

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice })
        }
    }, [turn, aiChoice, inSequence])

    useEffect(() => {
        if(userHealth === 0 || oppHealth === 0){
            (async() => {
                await wait(1000);
                onGameEnd(userHealth === 0 ? oppStats : userStats)
            })();
        }
    }, [ userHealth, oppHealth, onGameEnd ])

    return (
        <div className='h-full bg-gradient-to-r from-white to-cyan-500'>
            <div className='opponent flex flex-cols gap-1 w-full p-1'>
                <div className='summary flex items-stetch'>
                <CharacterSummary 
                    damage={oppHealth}
                    health={oppStats.character.health}
                    name={oppStats.character.name}
                    stamina={oppStats.character.stamina}
                />
                </div>
            </div>
            <div className='characters' >
                <div className='gameHeader'>
                    {userStats.character.name} vs {oppStats.character.name}
                </div>

                <div className='gameImages'>
                    <div className='playerSprite'>
                        <img className={[userAnimation]} src={userStats.character.img} alt={userStats.alt}/>
                    </div>

                    <div className='opponentSprite'>
                        <img className={[oppAnimation]} src={oppStats.character.img} alt={oppStats.alt}/>
                    </div>
                </div>
            </div>
            <div className='user'>
                <div className='summary'>
                    <CharacterSummary 
                        user
                        damage={userHealth}
                        health={userStats.character.health}
                        name={userStats.character.name}
                        stamina={userStats.character.stamina}
                    />
                </div>
                
                <div className='hud'>
                    <div className='hudChild'>
                        <BattleAnnoucer  
                        message={announcerMessage  || `What will ${userStats.character.name} do?`}/>
                    </div>
                    
                    <div className='hudChild'>
                        <BattleMenu user
                        onAttack={() => setSequence({ turn, mode: 'attack'})}
                        onUltimate={() => setSequence({ turn, mode: 'ultimate'})}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Battle
