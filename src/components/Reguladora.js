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
            <div className="Left">
                <p className="Variable-title">Nivel</p>
                <div className="Nivel-value"><p>{variable['LIT_NEUSA']}</p></div>
                <div className="Equipment"><p>LIT</p></div>
                <div className="Line-Equipment"></div>
                <div className="Water"></div>
                <div className="Envolv-part-montain">
                    <div className="Earth"></div>
                    <div className="Part-montain"></div>
                </div>
            </div>
            <div className="Center">
                <div className="Envolv-top-top-montain">
                    <div className="Top-top-left-montain"></div>
                    <div className="Top-top-center-montain"></div>
                    <div className="Top-top-right-montain"></div>
                </div>
                <div className="Envolv-top-montain">
                    <div className="Top-left-montain"></div>
                    <div className="Top-montain"></div>
                </div>
                <div className="Montain"></div>
            </div>
            <div className="Right">
                <div className="Main-line">
                    <div className="Cut-valv">
                        <div className="Status-valv">
                            <p>{variable['REM_CORTE'] === 1 && variable['LOC_CORTE'] === 0 ? 'Remoto' :
                            variable['REM_CORTE'] === 0 && variable['LOC_CORTE'] === 1 ? 'Local' : 'Fail'}</p>
                        </div>
                        <div className="Valv">
                            <div className="Body-valv">
                                <div className="Div-line"></div>
                            </div>
                            <div className="Con-valv"></div>
                        </div>
                        <div className="Main-pipe">
                            <div className="Center-pipe">
                                <div className="Pipe"></div>
                            </div>
                            <div className="Pipe-flange">
                                <div className="Flange-left"></div>
                                <div className="Flange-center"></div>
                                <div className="Flange-right"></div>
                            </div>
                            <div className="Center-pipe">
                                <div className="Pipe"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Pit"></div>
                    <div className="Fit"></div>
                    <div className="Reg-valv"></div>
                </div>
                <div className="Bypass-line"></div>
            </div>
            </div>
        </main>
    )
}