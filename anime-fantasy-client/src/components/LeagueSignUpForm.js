import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeagueSignUpForm = () => {
    
    const [signUpUser, setSignUpUser] = useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        setSignUpUser({
            ...signUpUser,
            [e.target.name]:e.target.value,
        })
    }

    const history = useNavigate()

    function handleSumbit(e){
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpUser)
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

    return (
        <div className='flex flex-wrap justify-center'>
            <form className='shadow-md bg-white round box-border h-64 w-96 p-4 px-8 pt-6 pb-8 mb-4 mt-20' onSumbit={handleSumbit}>
                <h2>Sign Up</h2>
                <label className='black text-gray-700 tet-sm font-bold md-2' >Username</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' onChange={handleChange} value={loginUser.name} type='text' placeholder='Username'/>
                <br/>
                <label className='black text-gray-700 tet-sm font-bold md-2' >Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email' onChange={handleChange} value={loginUser.name} type='text' placeholder='Email'/>
                <br/>
                <label className='black text-gray-700 tet-sm font-bold md-2' >Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' onChange={handleChange} value={loginUser.password} type='password' placeholder='********'/>
                <br/>
                <div className='flex items-center justify-between mt-5'>
                    <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' >Login</button>
                    <label >Need to Login?</label>
                    <h4 className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'>Login</h4>
                </div>
                
            </form>
        </div>
    )
}

export default LeagueSignUpForm
