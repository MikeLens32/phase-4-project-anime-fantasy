import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Navigate } from 'react-router-dom';
import { ALHContainer } from '../container/ALHContainer'

const ALHomePage = () => {

  // const { user } = useContext(UserContext)
  // if (!user) return <Navigate to='/'/>
    
  return (
    <div className='mx-10 my-10'>
        <ALHContainer />
    </div>
  )
}

export default ALHomePage