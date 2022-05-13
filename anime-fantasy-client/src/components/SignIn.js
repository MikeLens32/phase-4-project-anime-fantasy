import React, { useState } from 'react'

const SignIn = ({ loggedOn }) => {

    const [loginUser, setLoginUser] = useState({
        userName: '',
        password: ''
    })

    function handleChange(e){
        setLoginUser({
            ...loginUser,
            [e.target.name]:e.target.value,
        })
    }

    function handleSumbit(e){
        e.preventDefault()
        
        const user = {
            name: loginUser.userName,
            password: loginUser.passwords
        }

        fetch('/me', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((r) => r.json())
        .then((userData) => loggedOn(userData))
    }

    

    return (
        <div>
            <form onSumbit={handleSumbit}>
                <h2>Login</h2>
                <label>Username</label>
                <input name='userName' onChange={handleChange} value={loginUser.name} type='text'/>
                <br/>
                <label>Password</label>
                <input name='password' onChange={handleChange} value={loginUser.password} type='password'/>
                <br/>
                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default SignIn
