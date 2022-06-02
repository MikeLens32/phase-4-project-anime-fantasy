import React, { useState, useEffect } from 'react'
import Battle from './Battle'

const CharacterGenerator = () => {

    const [ character, setCharacter] = useState([])
    const [ chosenUserFighter, setChosenUserFighter ] = useState({})
    const [ chosenOppFighter, setChosenOppFighter ] = useState({})

    useEffect(() => {
        fetch('/characters')
        .then(r => r.json())
        .then(userCharacterData => setCharacter(userCharacterData))
    }, [])

    useEffect(() => {
        const options = character;
            setChosenUserFighter(options[Math.floor(Math.random() * options.length)])
            setChosenOppFighter(options[Math.floor(Math.random() * options.length)])
    }, [])

    return (
        <div>
            <Battle userStats={chosenUserFighter} oppStats={chosenOppFighter}/>
        </div>
    )
}

export default CharacterGenerator
