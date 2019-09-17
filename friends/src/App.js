import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
