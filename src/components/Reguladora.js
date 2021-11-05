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
  console.log(variable['LIT_NEUSA']);
    return (
        <main className="Container">
            <h1>Embalse de Neusa</h1>
            <div className="Picture">
            <div className="Left">
                <p className="Variable-title">Nivel</p>
                <div className="Nivel-value"><p>{variable['LIT_NEUSA']}</p></div>
                <div className="Equipment"></div>
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
            <div className="Right"></div>
            </div>
        </main>
    )
}