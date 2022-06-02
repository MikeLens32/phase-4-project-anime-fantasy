import React, { useState, useEffect } from 'react';
import '../css/Battle.css'
import { BattleAnnoucer } from './BattleAnnoucer';
import BattleMenu from './BattleMenu';
import CharacterSummary from './CharacterSummary';
// import { oppStats, userStats } from './TestCharacter'
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

    const [ character, setCharacter] = useState([])
    const [ userStats, setUserStats ] = useState({})
    const [ oppStats, setOppStats ] = useState({})

    useEffect(() => {
        fetch('/characters')
        .then(r => r.json())
        .then(userCharacterData => {
            setCharacter(userCharacterData)
            console.log('UserCharacterData',userCharacterData)
            // const options = character;
            setUserStats(userCharacterData[2])
            setOppStats(userCharacterData[10])
            // setUserStats(options[Math.floor(Math.random() * options.length)])
            // setOppStats(options[Math.floor(Math.random() * options.length)])
        })
    }, [])
    console.log('User:', userStats, 'Opp:', oppStats)
    console.log('img:', userStats.img)

    // useEffect(() => {
    //     const options = character;
    //         setUserStats(options[Math.floor(Math.random() * options.length)])
    //         setOppStats(options[Math.floor(Math.random() * options.length)])
    // }, [])

    useEffect(() => {
        if (aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode: aiChoice })
        }
    }, [turn, aiChoice, inSequence])

    return (
        <>
            <div className='opponent flex flex-cols gap-1 w-full p-1'>
                <div className='summary flex items-stetch'>
                {oppStats ? (<CharacterSummary 
                    damage={oppHealth}
                    health={oppStats.health}
                    name={oppStats.name}
                    stamina={oppStats.stamina}
                />) : null}
                </div>
            </div>
            <div className='characters' >
                {userStats && oppStats ? (<div className='gameHeader'>
                    {userStats.name} vs {oppStats.name}
                </div>) : null }

                <div className='gameImages'>
                    {userStats ? (<div className='playerSprite'>
                        <img className={[userAnimation]} src={require('../assets/Characers-05.png')} alt={userStats.alt}/>
                    </div>) : null}

                    {oppStats ? (<div className='opponentSprite'>
                        <img className={[oppAnimation]} src={require('../assets/Characers-15.png')} alt={oppStats.alt}/>
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
