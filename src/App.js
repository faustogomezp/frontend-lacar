import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Variable } from './components/Variable.js'
import {Home} from './components/Home.js'
import {Menu} from './components/Menu.js'
import {Reguladora } from './components/Reguladora.js'

function App() {
  return (
    <div className="App">
    <Router>
    <Menu></Menu>
      <Switch>
        <Route  path='/variables/online/valvula'>
          <Variable logger='valvula' title='Valvula Reguladora Neusa'></Variable>
        </Route>
        <Route  path='/variables/online/alumbrado'>
          <Variable logger='alumbrado' title='Alumbrado El Hato'></Variable>
        </Route>
        <Route  path='/variables/online/compuertas'>
          <Variable logger='compuertas' title='Compuertas Neusa'></Variable>
        </Route>
        <Route exact path='/'>
          <Reguladora />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
