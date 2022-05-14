import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LeagueSignInForm = ({ loggedOn }) => {
    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        setLoginUser({
            ...loginUser,
            [e.target.name]:e.target.value,
        })
    }

    const history = useNavigate()

    function handleSumbit(e){
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        })
            .then((r) => {
                if(r.ok){
                    r.json()
                    .then((userData) => loggedOn(userData))
                } else{
                    r.json().then(obj => alert(obj.error))
                }
            } )
             history.push('/anime-fantasy')
    }

    // function handleSignUp(e) {
    //     e.preventDefault()
    //     history.push('/signup')
    // }

    return (
        <div>
            <form onSumbit={handleSumbit}>
                <h2>Login</h2>
                <label>Username</label>
                <input class="form-input px-4 py-3 rounded-full" name='username' onChange={handleChange} value={loginUser.name} type='text'/>
                <br/>
                <label>Password</label>
                <input name='password' onChange={handleChange} value={loginUser.password} type='password'/>
                <br/>
                <button type='submit'>Login</button>
                <br/>
                <label>If You Need to Sign Up</label>
                <button >Sign Up</button>
            </form>
        </div>
    )
}

export default LeagueSignInForm
