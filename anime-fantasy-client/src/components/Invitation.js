import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Invitation = () => {

    const [invite, setInvite] = useState({
        username: '',
        invite_accepted: true
    })
    const { id } = useParams()
    const history = useNavigate()

    function handleChange(e) {
        setInvite({
            ...invite,
            [e.target.name]:e.target.value
        })
    }

    function handleSumbit(e) {
        e.preventDefault()

        const inviteForm = {
            league_id: {id},
            username: invite.username,
            invite_accepted: invite.invite_accepted
        }

        fetch('/invitations', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(inviteForm)
        })
        history('/anime-fantasy')
    }

    return (
        <div>
            <form className='grid grid-rows-3 shadow-md bg-white rounded-lg box-border hover:bg-opacity-50 duration-500 h-300 max-w-xl p-4 px-8 pt-6 pb-8 my-12' onSubmit={handleSumbit}>
                <h2>Invitation</h2>
                <label>Username</label>
                <input required type='text' name='username' value={invite.username} onChange={handleChange} placeholder='Enter Username Here'/>
                <br/>
                <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2' type='submit' value='Invite'/>
            </form>
        </div>
    )
}

export default Invitation
