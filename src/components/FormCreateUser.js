import '../App.css';
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import loginService  from '../services/users/login'
import useAuth from '../auth/useAuth'


export const FormCreateUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLogged} = useAuth();

    const handleCreateUser = async (event) => {
        event.preventDefault()
        try{
            const userSession = await loginService.createUser({
                name,
                username,
                password
            })

            setUsername('')
            setPassword('')
            setName('')
            alert('Se creo el usuario '+userSession.username)
        } catch(e){
            console.log(e)
        }
    }
    
      
    return (
            <div className='Container'>
            <h1>Crear usuario</h1>
            <form onSubmit={handleCreateUser}  className="Form-login">
                <input
                type='text'
                value={name}
                name='Name'
                placeholder='name'
                onChange={({target}) => setName(target.value)}
                />
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
                <button >Crear Usuario</button>
            </form>
            </div>
    )
}
