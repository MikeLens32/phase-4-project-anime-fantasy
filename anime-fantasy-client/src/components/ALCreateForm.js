import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';

const ALCreateForm = () => {

    const [ league, setLeague ] = useState({
        name: ''
    })

    const { user } = useContext(UserContext)

    console.log(`user: ${JSON.stringify(user)}`);
    
    function handleChange(e) {
        setLeague({
            ...league,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        const leagueForm = {
            creator_id: user.id,
            name: league.name
        }

        fetch('leagues', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(leagueForm)
        })
        .then(r =>{
            if(r.ok){
                r.json().then(leagueData => setLeague(leagueData))
            }
        })
    }

  return (
    <div>
        <form className='shadow-md bg-white round box-border h-64 w-96 p-4 px-8 pt-6 pb-8 mb-4 mt-20' onSubmit={handleSubmit} >
        <h2>Create League</h2>
            <label className='black text-gray-700 tet-sm font-bold md-2' >League Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='name' onChange={handleChange} value={league.name} require type='text' placeholder='League Name'/>
            <br/>
            <div className='flex items-center justify-between mt-5'>
            <input className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' value='Start'/>
            </div>
        </form>
    </div>
  )
}

export default ALCreateForm