import React, { useState } from 'react'

const EditModal = ({ open, close, id }) => {
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
                // filter the leageus and inject this updated league in the leagus list
                // .then(deletedLeague => setLeagueCard(leagueCard.filter(lc => lc.id !== deletedLeague.id)))
            }
        })
    }

    // 
    // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline px-2 my-2"

    return (
        <div className='bg-zinc-200 fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center'>
                <div className='flex-cols justify-center bg-white py-12 px-24 rounded-md'>
                    <div>
                        <form onSubmit={handleClick}>
                            <label className='text-blue-600 text-lg font-bold px-2 py-2'>Change League Name</label>                        
                            <input onChange={(e) => setLeagueName(e.target.value)} type="text" name="leagueName" value={leagueName} />
                            <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 mx-2 cursor-pointer' type='submit' value='CHANGE'/>
                            <button className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2 mx-2 cursor-pointer' onClick={close}>Cancel</button>
                            {/* {children} */}
                        </form>
                        

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EditModal
