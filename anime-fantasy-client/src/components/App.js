import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Character from './Character';
import CharacterId from './CharacterId';
import Invitation from './Invitation';
import AnimeLeague from './AnimeLeague'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/sign-up" element={<SignUp />} /> 
        <Route path="/sign-in" element={<SignIn />} />  */}
        <Route path="/invitation" element={<Invitation />} /> 
        <Route path="/anime-fantasy" element={<AnimeLeague />} /> 
        <Route path="/character" element={<Character />} /> 
        <Route path="/character/:id" element={<CharacterId />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
