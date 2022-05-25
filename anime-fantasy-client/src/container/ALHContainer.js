import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateLeague from '../components/CreateLeague'

export const ALHContainer = () => {    

    const history = useNavigate()

  return (
    <div>
        <div className='shadow-md bg-white round box-border h-64 w-64 p-4 px-8 pt-6 pb-8 mb-4 mt-20 items-centered' onSubmit={(e) => history(<CreateLeague />)}>
            <div>Create New League</div>
            <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' >Start</button>
        </div>
        <div >

        </div>
    </div>
  )
}
