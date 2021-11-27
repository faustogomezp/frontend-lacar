import {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Home} from '../components/Home.js'
import {Menu} from '../components/Menu.js'
import { Reguladora } from '../components/Reguladora.js'
import { Alumbrado } from '../components/Alumbrado.js'
import {Compuertas } from '../components/Compuertas.js'
import {FormLogin } from '../components/FormLogin.js'
import {FormCreateUser} from '../components/FormCreateUser.js'
import useAuth from '../auth/useAuth'


export const AppRouter = () =>{
  const { isLogged, validateLogin,  } = useAuth();
  
  useEffect(() => {
    validateLogin()
  }, [])
  

    return (
    <Router>
    <Menu></Menu>
      <Switch>
      <Route path='/users/login' render={() => {
        return isLogged() ? <Redirect to='/' /> : <FormLogin />
      }}>
        </Route>
        <Route path='/users/create_user' render={() => {
        return <FormCreateUser />
      }}>
        </Route>
        <Route  path='/variables/online/valvula' render={() => {
          return isLogged() ? <Reguladora logger='valvula' /> 
          : <Redirect to='/users/login' />
        }}>
        </Route>
        <Route  path='/variables/online/alumbrado' render={() => {
          return isLogged() ? <Alumbrado logger='alumbrado'/>
          : <Redirect to='/users/login' />
        }}>
        </Route>
        <Route  path='/variables/online/compuertas' render={() => {
          return isLogged() ? <Compuertas logger='compuertas' />
          : <Redirect to='/users/login' />
        }}>
        </Route>
        <Route exact path='/' render={() => {
          return isLogged() ? <Home />
          : <Redirect to='/users/login' />
        }}>
        
        </Route>
      </Switch>
    </Router>
    )
}