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
    <div className='mx-10 my-10'>
        <ALHContainer />
    </div>
  )
}

export default ALHomePage