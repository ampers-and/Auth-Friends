import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import { Navigation, Login, FriendList, PrivateRoute } from './components';
import Navigation from './components/Navigation';
import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
