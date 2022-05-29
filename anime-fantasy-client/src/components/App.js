import React, { useEffect, useContext } from 'react';
import {Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/user';
import Home from './Home';
import NavBar from './NavBar';
import LeagueSignInForm from './LeagueSignInForm';
import ALHomePage from './ALHomePage';

function App() {

  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return (
    <div className='h-screen w-full justify-center bg-gradient-to-r from-white to-cyan-500' >
        <NavBar />
        <Routes>
        <Route path="/" element={<LeagueSignInForm />} />  
        <Route path="/home" element={<Home />} /> 
        <Route path="/anime-fantasy" element={<ALHomePage />} />  
        </Routes>
    </div>
  );
}

export default App;
