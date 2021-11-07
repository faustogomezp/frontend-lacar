import '../App.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <header className="App-header">
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