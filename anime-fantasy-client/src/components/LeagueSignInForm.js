import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const LeagueSignInForm = () => {

    const [userForm, setUserForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        setUserForm({
            ...userForm,
            [e.target.name]:e.target.value
        })
    }

    // const history = useHistory()

    // function handleSignInSwitch() {
    //     history.push('/sign-up')
    // }

    return (
        <div>
            <form>
                <h1>Sign In</h1>
                <label>Username</label>
                <input  name="username" onChange={handleChange} value={userForm.username}/>
                <label>Email</label>
                <input  name="email" onChange={handleChange} value={userForm.email}/>
                <label>Password</label>
                <input  name="password" onChange={handleChange} value={userForm.password}/>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default LeagueSignInForm
