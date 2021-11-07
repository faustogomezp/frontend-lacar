import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Variable } from './components/Variable.js'
import {Home} from './components/Home.js'
import {Menu} from './components/Menu.js'
import { Reguladora } from './components/Reguladora.js'
import { Alumbrado } from './components/Alumbrado.js'

function App() {
  return (
    <div className="App">
    <Router>
    <Menu></Menu>
      <Switch>
        <Route  path='/variables/online/valvula'>
          <Reguladora />
        </Route>
        <Route  path='/variables/online/alumbrado'>
        <Alumbrado />
        </Route>
        <Route  path='/variables/online/compuertas'>
          <Variable logger='compuertas' title='Compuertas Neusa'></Variable>
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
