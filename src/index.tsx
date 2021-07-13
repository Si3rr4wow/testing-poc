import React from 'react';
import ReactDOM from 'react-dom';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/person/:id">
          <ComponentD/>
        </Route>
        <Route path="/">
          <ComponentC/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

