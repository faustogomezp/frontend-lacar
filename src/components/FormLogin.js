import '../App.css';
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import loginService  from '../services/users/login'
import useAuth from '../auth/useAuth'
import variableService from '../services/online/getDataVariable'


export const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLogged} = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault()
        try{
            const userSession = await loginService.login({
                username,
                password
            })
            window.localStorage.setItem(
                'loggedLacarUser', JSON.stringify(userSession)
            )
            login(userSession)
            setUsername('')
            setPassword('')
        } catch(e){
            console.log(e)
        }
    }
    
      
    return (
            <div>
            {isLogged() ?
            <div>
            <Redirect to='/' />
            </div>
            : 
            <div className='Container'>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}  className="Form-login">
                <input
                type='text'
                value={username}
                name='Username'
                placeholder='Username'
                onChange={({target}) => setUsername(target.value)}
                />
                <input
                type='password'
                value={password}
                name='Password'
                placeholder='Password'
                onChange={({target}) => setPassword(target.value)}
                />
                <button >Login</button>
            </form>
            </div>
        }
        </div>
    )
}
