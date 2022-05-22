import '../css/BattleAnnoucer.css';
import { useTypedMessage } from './UseTypedMessage'

export const BattleAnnoucer = ({ message }) => {

    const typedMessage = useTypedMessage(message)

    return (
        <div className='announcer_main'>
            <div className='annoucer_message'>{typedMessage}</div>
        </div>
    )
}
