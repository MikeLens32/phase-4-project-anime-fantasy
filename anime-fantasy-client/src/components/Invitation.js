import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Invitation = () => {

    const [invite, setInvite] = useState({
        name: '',
        invite_accepted: true
    })
    const history = useNavigate()

    function handleChange(e) {
        setInvite({
            ...invite,
            [e.target.name]:e.targer.value
        })
    }

    function handleSumbit(e) {
        e.preventDefault()

        const inviteForm = {
            name: invite.name,
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
            <form className='' onSubmit={handleSumbit}>
                <h2>Invitation</h2>
                <label>Username</label>
                <input type='text' name='name' value={handleChange} placeholder='Username'/>
                <input type='submit' value='Invite'/>
            </form>
        </div>
    )
}

export default Invitation
