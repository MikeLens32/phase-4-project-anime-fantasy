import React, { useState, useEffect, useContext } from 'react';
import { UserContext} from '../context/user'
import { useNavigate, useSearchParams } from 'react-router-dom';
import LeagueCard from '../components/LeagueCard';

export const ALHContainer = () => {    

  const history = useNavigate()
  const [ leagues, setLeagues ] = useState([])
  const { user } = useContext(UserContext)
  const [ serch, setSeach ] = useState('')

//   function handleSearch (e) {
    
//  }


  useEffect(() => {
    fetch(`/leagues?user_id=${user.id}`)
    .then(r => r.json())
    .then((leaguesData) => setLeagues(leaguesData))
  }, [user.id])

  const handleSubmit = (e) => {
    fetch('/find-characters', {
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      body: JSON.stringify()
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <div className='h-100 w-full bg-gradient-to-r from-white to-cyan-500'>
        <div className='shadow-md bg-white rounded-lg box-border hover:bg-opacity-50 hover:-translate-y-3 duration-500 h-300 h-34 w-52 p-4 px-8 pt-6 mb-8 mt-12 ml-8' >
            <div className='text-blue-600 text-lg font-bold'>Create New League</div>
            <button className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 cursor-pointer' type='submit' onClick={(e) => history('/create-league')}>Start</button>
        </div>
        <div>
          <form onSumbit={handleSubmit}>
            <input type='text' name='' value='' onChange={(e) => setSearch(e.target.value)} />
            <input type='sumbit' value='Search' />
          </form>
        <div >
          <div className='Display Leagues grid-cols-4 px-8'>
            <LeagueCard leagues={leagues} setLeagues={setLeagues} />
          </div>
        </div>
        <div >

        </div>
    </div>
    </div>
  )
}
