import React, { useState } from 'react'

const LeagueSignUpForm = () => {
    
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

    return (
        <div>
            <form>
                <h1>Sign Up</h1>
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

export default LeagueSignUpForm
