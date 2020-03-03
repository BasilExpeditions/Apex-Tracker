import React from 'react';
import PlayerStats from './pages/playerStats';
import About from './pages/about';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/playerStats'>Player Stats</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/playerStats'>
            <PlayerStats />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    //const App = () => {
    //return (
    //<div className='container'>
    //<Header />
    //Changes Saved
    //</div>
  );
};

export default App;
