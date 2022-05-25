import React, { useState } from 'react'

const ALCreateForm = () => {

    const [ league, setLeague ] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        const leagueForm = {
            league
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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='league' onChange={(e) => setLeague(e.target.value)} value={league} type='text' placeholder='League'/>
            <br/>
            <div className='flex items-center justify-between mt-5'>
            <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' >Login</button>
            </div>
        </form>
    </div>
  )
}

export default ALCreateForm