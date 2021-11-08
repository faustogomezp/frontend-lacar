import '../App.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'

export const Menu = () => {
    const [fecha, setDate] = useState(new Date());

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