import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeagueCard from '../components/LeagueCard';

export const ALHContainer = () => {    

  const history = useNavigate()
  const [ league, setLeague ] = useState([])
  // const [ currentLeague, setCurrentLeague ] = useState(1)


  useEffect(() => {
    fetch(`/leagues`)
    .then(r => r.json())
    .then((leagueData) => setLeague(leagueData))
  }, [])
  console.log(league)

  // const filtered = league.filter(l => l.id === 1)
  // console.log('Filtered',filtered)

  return (
    <div className='bg-gradient-to-r from-white to-cyan-500'>
        <div className='shadow-md bg-white rounded-lg box-border h-28 w-52 p-4 px-8 pt-6 pb-8 ' >
            <div>Create New League</div>
            <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' onClick={(e) => history('/create-league')}>Start</button>
        </div>

        <div >
          <div className='Display Leagues grid-cols-4'>
            <LeagueCard leagues={league}/>
          </div>
        </div>
        <div >

        </div>
    </div>
  )
}
