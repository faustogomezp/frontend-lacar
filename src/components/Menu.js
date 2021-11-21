import '../App.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import useAuth from '../auth/useAuth'

export const Menu = () => {
    const [fecha, setDate] = useState(new Date());
    const {isLogged, logout} = useAuth();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="App-header">
        <time>Fecha Actual: {fecha.toLocaleDateString() + '-' + fecha.toLocaleTimeString()}</time>
        <nav className="Menu">
           <ul className="Menu-opciones"> 
            {!isLogged() 
            ? <li><Link to='/users/login'>Login</Link></li> : 
            <li><Link to='/users/login' onClick={logout}>Logout</Link></li> }
                <li>
            <Link to='/'>
                Home
            </Link></li>
            <li><Link to='/variables/online/compuertas'>
                Compuertas
            </Link></li>
            <li><Link to='/variables/online/valvula'>
                Valvula
            </Link></li>
            <li><Link to='/variables/online/alumbrado'>
                Alumbrado
            </Link></li>
            </ul>
            
            
            </nav>
            </header>   
    );
}
