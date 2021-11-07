import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home.js'
import {Menu} from './components/Menu.js'
import { Reguladora } from './components/Reguladora.js'
import { Alumbrado } from './components/Alumbrado.js'
import {Compuertas } from './components/Compuertas.js'

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
          <Alumbrado logger='alumbrado'/>
        </Route>
        <Route  path='/variables/online/compuertas'>
          <Compuertas logger='compuertas' />
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
