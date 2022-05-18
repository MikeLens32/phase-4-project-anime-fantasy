import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
// import LeagueSignInForm from './LeagueSignInForm';
// import LeagueSignUpForm from './LeagueSignUpForm';
// import Character from './Character';
// import CharacterId from './CharacterId';
import Invitation from './Invitation';
import AnimeLeague from './AnimeLeague'

function App() {
  return (
    <div >
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/invitation" element={<Invitation />} /> 
        <Route path="/anime-fantasy" element={<AnimeLeague />} />  
        </Routes>
    </div>
  );
}

export default App;
