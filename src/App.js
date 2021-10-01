import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Redirect, 
  Switch
} from 'react-router-dom';
import Users from './user/pages/Users';

function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
  
  )
}

export default App;
