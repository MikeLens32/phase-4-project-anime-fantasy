import { useState, useEffect } from 'react'

export const useAIOppenent = turn => {

    const [ aiChoice, setAiChoice ] = useState('')

    useEffect(() => {
        if(turn === 1) {
            const options = [ 'attack', 'ultimate'];
            setAiChoice(options[Math.floor(Math.random() * options.length)])
        }
    }, [turn] )

    return aiChoice;
}
