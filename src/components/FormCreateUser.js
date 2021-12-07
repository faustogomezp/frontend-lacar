import '../App.css';
import {useState, useEffect} from 'react'
import loginService  from '../services/users/login'


export const FormCreateUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(null);

    useEffect(() =>{

    }, [name, username, password, userCreated])

    const handleCreateUser = async (event) => {
        event.preventDefault()
        try{
            setUserCreated(null)
            const userSession = await loginService.createUser({
                name,
                username,
                password
            })
            setUserCreated(userSession)
            setUsername('')
            setPassword('')
            setName('')
        } catch(e){
            console.log(e)
        }
    }
    
      
    return (
            <div className='Container'>
            <h1>Crear usuario</h1>
            {userCreated ? 
            <div>El usuario fue creado con éxito</div> 
            : ''}
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
