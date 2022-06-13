import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditLeagueName = () => {

    const [leagueName, setLeagueName] = useState('')
    const { id } = useParams()
    const history = useNavigate()

    useEffect(() => {
        fetch(`/leagues/${id}`)
        .then(r => r.json())
        .then(league => {
            setLeagueName(league.name)
        })
    }, [id])

    function handleClick(e) {
        e.preventDefault()

        const leagueForm = {            
            name: leagueName
        }

        fetch(`/leagues/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(leagueForm)
        })
        .then(r => r.json())
        history('/anime-fantasy')
    }

    return (
        <div className='flex justify-center h-screen bg-gradient-to-r from-white to-cyan-500'>
            <div className='grid grid-rows-3 shadow-md bg-white rounded-lg box-border h-64 max-w-xl p-4 px-8 pt-6 pb-8 my-12 justify-center items-centered'>
                <form onSubmit={handleClick}>
                    <label className='text-blue-600 text-lg font-bold px-2 py-2'>Change League Name</label>                        
                    <input className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-2 py-2 my-3" onChange={(e) => setLeagueName(e.target.value)} type="text" name="leagueName" value={leagueName} />
                    <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 my-2 mx-2' type='submit' value='CHANGE'/>
                    <button className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 my-2 mx-2' onClick={() => history('/anime-fantasy')}>CANCEL</button>
                </form>
            </div>
        </div>
    )
}

export default EditLeagueName
