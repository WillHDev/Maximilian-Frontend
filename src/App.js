import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Users from './user/components/Users';

function App() {

  return (
    <Router>
      <Route exact path="/">
        <Users />
      </Route>

    </Router>
  
  )
}

export default App;
