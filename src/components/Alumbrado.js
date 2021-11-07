import '../App.css';
import {useState, useEffect} from 'react'
import { getDataVariable } from '../services/online/getDataVariable.js'


export const Alumbrado = ({ logger }) => {
    const [variable, setVariable] = useState([]);
    useEffect(() => {
    getDataVariable( logger )
    .then(variable => {
        setVariable(variable);
    })
    }, [variable, logger])

    return (
        <main className="Container">
            <h1>Alumbrado</h1>
            <div className="Picture-alumbrado">
                <div className="title1">
                    <p>Zona 1</p>
                    <p>{variable['ENTRADA_1_AUTO'] === 1
                    ? 'Automatico' : 'Manual'}</p>
                </div>
                <div className={variable['ENCENDIDO_1'] === 1 
                ? "Ramal1-encendido" : "Ramal1-apagado"}>
                </div>
                <div className="title2">
                    <p>Zona 2</p>
                    <p>{variable['ENTRADA_2_AUTO'] === 1
                    ? 'Automatico' : 'Manual'}</p>
                </div>
                <div className={variable['ENCENDIDO_2'] === 1 
                ? "Ramal2-encendido" : "Ramal2-apagado"}>
                </div>
                <div className="title3">
                    <p>Zona 3</p>
                    <p>{variable['ENTRADA_3_AUTO'] === 1
                    ? 'Automatico' : 'Manual'}</p>
                </div>
                <div className={variable['ENCENDIDO_3'] === 1 
                ? "Ramal3-encendido" : "Ramal3-apagado"}>
                </div>
            </div>
        </main>
    )
}