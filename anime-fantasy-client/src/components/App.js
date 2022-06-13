import React, { useEffect, useContext } from 'react';
import {Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/user';
import Home from './Home';
import NavBar from './NavBar';
import LeagueSignInForm from './LeagueSignInForm';
import ALHomePage from './ALHomePage';
import CreateLeague from './CreateLeague';
import AnimeLeague from './AnimeLeague';
import Invitation from './Invitation';
import EditLeagueName from './EditLeagueName';

function App() {

  const {getCurrentUser} = useContext(UserContext)

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return (
    <div className='h-full w-full justify-center bg-gradient-to-r from-white to-cyan-500' >
        <NavBar />
        <Routes>
        <Route exact path="/" element={<LeagueSignInForm />} />  
        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/anime-fantasy" element={<ALHomePage />} />  
        <Route exact path="/create-league" element={<CreateLeague />} />  
        <Route exact path="/anime-league/:id" element={<AnimeLeague />} />  
        <Route exact path="/anime-league/:id/edit" element={<EditLeagueName />} />  
        <Route exact path="/anime-league/:id/invitation" element={<Invitation />} />  
        </Routes>
    </div>
  );
}

export default App;
