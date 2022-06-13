import '../css/ALHomePage.css'
import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/user'
import { ALHContainer } from '../container/ALHContainer'
import { useNavigate } from 'react-router';

const ALHomePage = () => {

  const { user } = useContext(UserContext)
  const history = useNavigate()

  useEffect(() => {
    if (!user){
        return history('/')
    }
  }, [user, history])
    
  return (
    <div className='h-screen w-full justify-center items-center bg-gradient-to-r from-white to-cyan-500'>
      <div className='flex justify-center'>
        <h1 className='title'>Welcome {user.username}!</h1>
      </div>
        <ALHContainer />
    </div>
  )
}

export default ALHomePage