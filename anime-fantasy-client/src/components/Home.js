import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Navigate } from 'react-router-dom';
import NewsFeedContainer from '../container/NewsFeedContainer'

const Home = () => {

    const { user } = useContext(UserContext)
    if (!user) return <Navigate to='/'/>
    
    return (
        <div className='h-full bg-gradient-to-r from-white to-cyan-500'>
            <h1>Home</h1>
            <div >
                <NewsFeedContainer />
            </div>
            
        </div>
    )
}

export default Home
