import React, { useEffect, useContext } from 'react';
import {Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/user';
import Home from './Home';
import NavBar from './NavBar';
import LeagueSignInForm from './LeagueSignInForm';
import ALHomePage from './ALHomePage';

function App() {

  const {getCurrentUser, user} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [user])

  return (
    <div >
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
