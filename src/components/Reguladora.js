import '../App.css';
import {useState, useEffect} from 'react'
import { getDataVariable } from '../services/online/getDataVariable.js'


export const Reguladora = () => {
    const logger = 'valvula';
    const [variable, setVariable] = useState([]);
    
    useEffect(() => {
    getDataVariable(logger)
    .then(variable => {
        setVariable(variable);
    })
    }, [variable, logger])


    return (
        <main className="Container">
            <h1>Embalse de Neusa</h1>
            <div className="Picture">
                <div className="Grid-lit-value">
                    <div className="Value Lit"><p>{variable['PIT_FALLA'] === 1 
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
        </main>
    )
}