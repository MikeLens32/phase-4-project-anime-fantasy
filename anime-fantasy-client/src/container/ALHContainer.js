import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateLeague from '../components/CreateLeague'

export const ALHContainer = () => {    

  const history = useNavigate()
  const [ league, setLeague ] = useState({})

  useEffect(() => {
    fetch('/league_characters')
    .then(r => r.json())
    .then((leagueData) => setLeague(leagueData))
  }, [])

  return (
    <div >
        <div className='shadow-md bg-white rounded-lg box-border h-28 w-52 p-4 px-8 pt-6 pb-8 ' >
            <div>Create New League</div>
            <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' onSubmit={(e) => history(<CreateLeague />)}>Start</button>
        </div>

        <div className='shadow-md bg-white rounded-lg box-border h-200 w-64 p-4 px-8 pt-6 pb-8 my-12'>
          <div className='Display Leagues grid-cols-4'>
            <div className='Card for League information'/>
          </div>
        </div>
        <div >

        </div>
    </div>
  )
}
