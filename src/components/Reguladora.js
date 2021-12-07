import '../App.css';
import {useState, useEffect} from 'react'
import variableService from '../services/online/getDataVariable.js'
import { Link } from 'react-router-dom';

export const Reguladora = ({logger}) => {
    const [variable, setVariable] = useState([]);
    const [dateData, setDateData] = useState('');
    const [error, setError] = useState(null)   
    useEffect(() => {
        let isSubscribed = true;
        variableService.getDataVariable(logger)
            .then(variable => {
                if (isSubscribed) {
                    setVariable(variable);
                    let date = new Date(variable['FECHA']);
                    let dateTime = date.getTime();
                    let dateTimeReal = dateTime - 18000000;
                    date.setTime(dateTimeReal);
                    setDateData(date.toLocaleString());
                };
            })
            .catch((error) => {
                setError(error)
            })
        return () => (isSubscribed = false);
    }, [logger, variable, error]);

    return (
        <main>
            <div className="Container"  >
            <div className="Main-header">
            <h1>Embalse de Neusa</h1>
            <p><Link to='/history/valvula'>Historicos</Link></p>
            <p>Última actualización {dateData}</p>
            </div>
            {
                error ? <p>No se pudo establecer conexión con el servidor</p>
                :
            <div className="Picture">
                <div className="Grid-lit-value">
                    <div className="Value Lit"><p>{variable['LIT_FALLA'] === 1 
                    ? 'Fail' : variable['LIT_NEUSA']}</p></div>
                </div>
                <div className="Grid-cut-valv">
                    <div className="Layout-valv Font-value Cut-valv"><p>{variable['LOC_CORTE'] === 0 && variable['REM_CORTE'] === 1 
                        ? 'Remoto' : variable['LOC_CORTE'] === 1 && variable['REM_CORTE'] === 0 
                        ? 'Local' : 'Fail'}</p>
                    </div>
                </div>
                <div className="Grid-pit-value">
                    <div className="Value Pit"><p>{variable['PIT_FALLA'] === 1 
                    ? 'Fail' : variable['PIT_NEUSA']}</p></div>
                    <div className="Value Fit"><p>{variable['FIT_FALLA'] === 1
                    ? 'Fail' : variable['FIT_NEUSA']}</p></div>
                </div>
                <div className="Grid-reg-valv">
                    <div className="Layout-valv Font-value Reg-valv"><p>{variable['FAL_REG'] === 1 
                        ? 'Fail' : variable['REM_REG'] === 1 
                        ? 'Remoto' : variable['LOC_REG'] === 1 
                        ? 'Local' : ''}</p>
                    </div>
                    <div className="Value Zt"><p>{variable['ZT_FALLA'] === 1
                        ? 'Fail' : variable['ZT_NEUSA']}</p></div>
                </div>
            
            </div>
            }
            </div>
            
        </main>
        
    )
}