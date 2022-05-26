import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Navigate } from 'react-router-dom';
import NewsFeedContainer from '../container/NewsFeedContainer'

const Home = () => {

    const { user } = useContext(UserContext)
    if (!user) return <Navigate to='/'/>
    
    return (
        <div className='h-screen w-full bg-gradient-to-r from-white to-cyan-500'>
            <div >
                <NewsFeedContainer />
            </div>
            
        </div>
    )
}

export default Home
