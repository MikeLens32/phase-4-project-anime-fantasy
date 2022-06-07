import React, { useEffect, useState } from 'react'

const EditModal = ({ open, close, id, leagues, LeagueCard, setLeagueCard }) => {
    const [leagueName, setLeagueName] = useState('')
    if (!open) return null

    // function handleChange(e) {
    //     setLeagueName(e.target.value)
    // }

    console.log(`leagueName: ${leagueName} | id: ${id}`);

    function handleClick(e) {
        e.preventDefault()

        const leagueForm = {            
            name: leagueName
        }

        fetch(`leagues/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(leagueForm)
        })
        .then(r => {
            if(r.ok){
                r.json().then(leagueData => {
                    const updatedLeagueData = leagues.filter((league) => {
                        if (league.id !== leagueData.id) {
                              return leagueData;
                            }
                        else {
                          return league;
                        }  
                      }
                    )
                    // setLeagueName(updatedLeagueData)
                    setLeagueCard(updatedLeagueData);
                })
                // filter the leageus and inject this updated league in the leagus list
                // .then(deletedLeague => setLeagueCard(leagueCard.filter(lc => lc.id !== deletedLeague.id)))
            }
        })
        close()
    }

    // 
    // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-2 my-2"
    // className='fixed inset-0 z-10 justify-center items-center'
    return (
                <div >
                    <div className='flex flex-col justify-center bg-white rounded-md'>
                        <form onSubmit={handleClick}>
                            <label className='text-blue-600 text-lg font-bold px-2 py-2'>Change League Name</label>                        
                            <input className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setLeagueName(e.target.value)} type="text" name="leagueName" value={leagueName} />
                            <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-0.5 py-0.5 mx-0.5 cursor-pointer' type='submit' value='CHANGE'/>
                            <button className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-0.5 py-0.5 mx-0.5 cursor-pointer' onClick={close}>Cancel</button>
                            {/* {children} */}
                        </form>
                    </div>
                </div>
    )
}

export default EditModal
