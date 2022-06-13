import { useState, useEffect } from 'react'
import { wait, ultimate, attack } from './Helpers';


export const useBattleSequence = ({ sequence, userStats, oppStats }) => {
  
    const [ turn, setTurn] = useState(0)
    
    
    const [ inSequence, setInSequence ] = useState(false)
    const [ oppHealth, setOppHealth ] = useState(oppStats.character.health)
    const [ userHealth, setUserHealth ] = useState(userStats.character.health)

    const [ announcerMessage, setAnnouncerMessage ] = useState('')

    const [userAnimation, setUserAnimation] = useState('static')
    const [oppAnimation, setOppAnimation] = useState('static')

    useEffect(() => {
        const { mode, turn } = sequence

        if (mode) {

            const attacker = turn === 0 ? userStats : oppStats
            const reciever = turn === 0 ? oppStats :userStats 

            switch (mode) {
                case 'attack': {
                    const damaged = attack({ attacker, reciever});
                    (async () => {
                        setInSequence(true);
                        setAnnouncerMessage(`${attacker.character.name} has chosen to attack!`);

                        await wait(1000);

                        turn === 0 ? setUserAnimation('attack') : setOppAnimation('attack');
                        await wait(100);

                        turn === 0 ? setUserAnimation('static') : setOppAnimation('static');
                        await wait(500);

                        turn === 0 ? setOppAnimation('damaged') : setUserAnimation('damaged');
                        await wait(750);

                        turn === 0 ? setOppAnimation('static') : setUserAnimation('static');
                        setAnnouncerMessage(`${reciever.character.name} felt that!`);
                        turn === 0 ? setOppHealth(h => ( h - damaged > 0 ? h - damaged : 0)) : setUserHealth(h => (h - damaged > 0 ? h - damaged : 0));
                        await wait(2000);

                        setAnnouncerMessage(`Now it's ${reciever.character.name} turn!`);
                        await wait(1500);

                        setTurn(turn === 0 ? 1 : 0)
                        setInSequence(false);

                    })()
                    
                    break 
                }

                case 'ultimate': {
                    const damaged = ultimate({ attacker, reciever});
                    (async () => {
                        setInSequence(true);
                        setAnnouncerMessage(`${attacker.character.name} has chosen to ultimate!`);

                        await wait(1000);

                        turn === 0 ? setUserAnimation('ultimate') : setOppAnimation('ultimate');
                        await wait(100);

                        turn === 0 ? setUserAnimation('static') : setOppAnimation('static');
                        await wait(500);

                        turn === 0 ? setOppAnimation('damaged') : setUserAnimation('damaged');
                        await wait(750);

                        turn === 0 ? setOppAnimation('static') : setUserAnimation('static');
                        setAnnouncerMessage(`Ouch I know ${reciever.character.name} felt that!`);
                        turn === 0 ? setOppHealth(h => ( h - damaged > 0 ? h - damaged : 0)) : setUserHealth(h => (h - damaged > 0 ? h - damaged : 0));
                        await wait(2000);

                        setAnnouncerMessage(`Now it's ${reciever.character.name} turn!`);
                        await wait(1500);

                        setTurn(turn === 0 ? 1 : 0)
                        setInSequence(false);

                    })()
                    
                    break 
                }

                default:
                    break
            }
        }
    }, [ userStats, oppStats,sequence])

    return {
        turn,
        inSequence,
        userHealth,
        oppHealth,
        announcerMessage,
        userAnimation,
        oppAnimation
    }
}
