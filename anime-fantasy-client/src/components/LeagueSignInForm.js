import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MessageContext } from '../context/message'

const LeagueSignInForm = () => {

    const { setUser, login, signup} = useContext(UserContext)
    const { setMessage } = useContext(MessageContext)
    const [ toggle, setToggle ] = useState(false)
    const[ userObjIn, setUserObjIn ] = useState({
        username: '',
        password:'',

    })
    const[ userObj, setUserObj ] = useState({
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    // const [ thisUser, setThisUser ] = useState({
    //     username: '',
    //     password:''
    // })

    function handleToggle(){
        setToggle(!toggle)
    }

    function handleChange(e){
        setUserObjIn({
            ...userObjIn,
            [e.target.name]:e.target.value,
        })
    }

    function handleSignupChange(e){
        setUserObj({
            ...userObj,
            [e.target.name]:e.target.value,
        })
    }

    const history = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        if([userObjIn.username, userObjIn.password].some(val => val.trim() === '')) {
            setMessage({message: "You must fill in all the information please!", color: 'red'})
        }
        login(userObjIn)
    }

    function handleSignUp(e){
        e.preventDefault()
        if ([userObj.password, userObj.passwordConfirmation, userObj.username].some(val => val.trim() === '')) {
            setMessage({ message: 'You must fill in all information please!', color: 'red'})
        }
        const didItWork = signup({...userObj, passwordConfirmation: userObj.passwordConfirmation })
        if (didItWork) {
            setMessage({message: 'User successfully created!', color: 'green'})
            history('/home')
        }
        signup(userObj)
    }


    return (
        <>
            {!toggle ?
                (<div className='h-screen bg-gradient-to-r from-white to-cyan-500 flex flex-wrap justify-center'>
                    <form className='shadow-md bg-white round box-border h-64 w-96 p-4 px-8 pt-6 pb-8 mb-4 mt-20' onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label className='black text-gray-700 tet-sm font-bold md-2' >Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' onChange={handleChange} value={userObjIn.username} type='text' placeholder='Username' required/>
                    <br/>
                    <label className='black text-gray-700 tet-sm font-bold md-2' >Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' onChange={handleChange} value={userObjIn.password} type='password' placeholder='********' required/>
                    <br/>
                    <div className='flex items-center justify-between mt-5'>
                        <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' >Login</button>
                        <label >Need to Sign Up?</label>
                        <h4 className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' onClick={handleToggle}>Sign Up</h4>
                    </div>
                    </form>
                </div>) :
                (<div className='h-screen bg-gradient-to-r from-white to-cyan-500 flex flex-wrap justify-center'>
                    <form className='shadow-md bg-white round box-border h-64 w-96 p-4 px-8 pt-6 pb-8 mb-4 mt-20' onSubmit={handleSignUp}>
                    <h2>Sign Up</h2>
                    <label className='black text-gray-700 tet-sm font-bold md-2' >Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='username' onChange={handleSignupChange} value={userObj.username} type='text' placeholder='Username' required/>
                    <br/>
                    <label className='black text-gray-700 tet-sm font-bold md-2' >Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='password' onChange={handleSignupChange} value={userObj.password} type='password' placeholder='********' required/>
                    <br/>
                    <div className='flex items-center justify-between mt-5'>
                        <button className='bg-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline' type='submit' >Sign Up</button>
                        <label >Need to Login?</label>
                        <h4 className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' onClick={handleToggle}>Login</h4>
                    </div>
                    </form>
        </div>)
            }
            
        </>
    )
}

export default LeagueSignInForm
