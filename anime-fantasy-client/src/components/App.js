import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import AnimeLeague from './AnimeLeague'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/'>
          <Home />
          </Route>
          {/* <Route path='/sign-up'>
        <SignUp />
          </Route>
          <Route path='/sign-in'>
        <SignIn />
          </Route>
          <Route path='/invitation'>
        <Invitation />
          </Route> */}
          <Route path='/anime-fantasy'>
          <AnimeLeague />
          </Route>
          <Route path='/character'>
          <AnimeLeague />
          </Route>
          <Route path='/character/:id'>
          <AnimeLeague />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
