import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ViewCharacters from '../../containers/CharactersView';
import DetailView from '../../containers/DetailView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={ViewCharacters} />
        <Route exact path="/detail/:name"
          component={DetailView} />
      </Switch>
    </Router>
  );
}
