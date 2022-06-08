import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'

const Invitation = () => {

    const [memberId, setMemberId] = useState(1);
    const [usersOptions, setUsersOptions] = useState([]);
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const history = useNavigate()

    useEffect(() => {
        fetch('/users').then(r => r.json()).then((data) => setUsersOptions(data))
    }, [])

    console.log(`usersOptions: ${JSON.stringify(usersOptions)}`)

    function handleChange(e) {
        setMemberId(e.target.value);
    }

    function handleSumbit(e) {
        e.preventDefault()

        const inviteForm = {
            league_id: id,
            user_id: user.id,
            member_id: memberId,
            invite_accepted: true
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

    const usersOptionsMapped = () => {
        return usersOptions.map((userOption) => (
            <option value={userOption.id}>{userOption.username}</option>
        ))
    }

    return (
        <div>
            <form className='grid grid-rows-3 shadow-md bg-white rounded-lg box-border hover:bg-opacity-50 duration-500 h-300 max-w-xl p-4 px-8 pt-6 pb-8 my-12' onSubmit={handleSumbit}>
                <h2>Invitation</h2>
                <label>Member Name</label>
                <select required type='text' name='member_id' options={usersOptions} value={memberId} onChange={handleChange}>
                    {usersOptionsMapped()}
                </select>
                <br/>
                <input className='bg-blue-600 rounded-lg box-border hover:bg-blue-200 hover:text-blue-600 text-blue-50 text-sm font-bold px-2 py-2' type='submit' value='Invite'/>
            </form>
        </div>
    )
}

export default Invitation
