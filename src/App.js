import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Variable } from './components/Variable.js'
import {Home} from './components/Home.js'
import {Menu} from './components/Menu.js'

function App() {
  return (
    <div className="App">
    <Router>
    <Menu></Menu>
      <Switch>
        <Route  path='/variables/online/valvula'>
          <Variable logger='valvula'></Variable>
        </Route>
        <Route  path='/variables/online/alumbrado'>
          <Variable logger='alumbrado'></Variable>
        </Route>
        <Route  path='/variables/online/compuertas'>
          <Variable logger='compuertas'></Variable>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
