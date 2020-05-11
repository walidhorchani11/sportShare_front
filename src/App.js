import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      {/* <Route path="/" exact component={ Users }> 
       path is like a filter , we add exact qui pend par defaut true */}
      <Switch>
        {/** url pour la page listing users: getAllUsers */}
      <Route path="/" exact={true}>
        <Users />
      </Route>
      {/** url pour la page formulaire add place:
       *  le butoon submit doit lance api createUser */}
      <Route path="/place/new" exact>
        <NewPlace />
      </Route>
      {/* si path ne convient a aoucin route on utilise redirect , 
      ici il nous renvoie vers "/"  */}
      <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
