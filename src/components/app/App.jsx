import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ViewCharacters from '../../containers/ViewCharacters';
import DetailView from '../detail/DetailView';

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
