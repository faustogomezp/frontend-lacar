import '../App.css';
import {useState, useEffect} from 'react'
import { getDataVariable } from '../services/online/getDataVariable.js'


export const Compuertas = ({ logger }) => {
    const [variable, setVariable] = useState([]);
    const [dateData, setDateData] = useState('');
    useEffect(() => {
        let isSubscribed = true;
        getDataVariable( logger )
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
        return () => (isSubscribed = false);
    }, [variable, logger, dateData])

    return (
        <main className="Container">
            <div className="Main-header">
            <h1>Compuertas</h1>
            <p>Última actualización {dateData}</p>
            </div>
            <div className="Picture-compuertas">
                <div className="Compuerta Compuerta1">
                    <h3>Compuerta 1</h3>
                    <p className='Compuerta-abierta'>{variable['ENT5_ABIER_1'] === 1 
                    ? 'Abierta' :  '' }</p>
                    <p className='Compuerta-loc-rem'>{variable['ENT2_MAN_1'] === 1 
                    ? 'Local' : variable['ENT3_AUT_1'] === 1
                    ? 'Remoto' : '' }</p>
                    <p className='Compuerta-falla'>{variable['ENT1_FALLA_1'] === 1 
                    ? 'Falla' :  '' }</p>
                    <p className='Compuerta-cerrada'>{variable['ENT4_CERR_1'] === 0
                    ? 'Cerrada' :  '' }</p>
                </div>
                <div className="Compuerta Compuerta2">
                    <h3>Compuerta 2</h3>
                    <p className='Compuerta-abierta'>{variable['ENT2_2_ABIER_2HMI'] === 1 
                    ? 'Abierta' :  '' }</p>
                    <p className='Compuerta-loc-rem'>{variable['ENT7_MAN_2'] === 1 
                    ? 'Local' : variable['ENT8_AUT_2'] === 1
                    ? 'Remoto' : '' }</p>
                    <p className='Compuerta-falla'>{variable['ENT6_FALLA_2'] === 1 
                    ? 'Falla' :  '' }</p>
                    <p className='Compuerta-cerrada'>{variable['ENT2_1_CERR_2HMI'] === 0
                    ? 'Cerrada' :  '' }</p>
                </div>
                <div className="Compuerta Compuerta3">
                    <h3>Compuerta 3</h3>
                    <p className='Compuerta-abierta'>{variable['ENT2_7_ABIER_3_HMI'] === 1 
                    ? 'Abierta' :  '' }</p>
                    <p className='Compuerta-loc-rem'>{variable['ENT2_4_MAN_3_HMI'] === 1 
                    ? 'Local' : variable['ENT2_5_AUTO_3_HMI'] === 1
                    ? 'Remoto' : '' }</p>
                    <p className='Compuerta-falla'>{variable['ENT2_3_FALL_3_HMI'] === 1 
                    ? 'Falla' :  '' }</p>
                    <p className='Compuerta-cerrada'>{variable['ENT2_6_CERR_3_HMI'] === 0
                    ? 'Cerrada' :  '' }</p>
                </div>
            </div>
        </main>
    )
}