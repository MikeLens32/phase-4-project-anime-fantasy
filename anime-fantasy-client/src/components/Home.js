import React from 'react'
import NewsFeedContainer from '../container/NewsFeedContainer'

const Home = () => {
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
