import { wait } from './Helpers';
import { useEffect, useState } from 'react';

export const useTypedMessage = message => {
    const [typedMessage, setTypedMessage] = useState('');
  
    useEffect(() => {
      setTypedMessage('');
  
      if (message.length) {
        (async () => {
          let visibleMessage = '';
          for (let i = 0; i < message.length; i++) {
            await wait(5);
  
            visibleMessage = visibleMessage + message[i];
  
            setTypedMessage(visibleMessage);
          }
        })();
      }
    }, [message]);
  
    return typedMessage;
  };
