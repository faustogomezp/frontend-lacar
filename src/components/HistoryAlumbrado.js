import '../App.css';
import {useState, useEffect} from 'react'
import variableService from '../services/online/getDataVariable.js'


export const HistoryAlumbrado = () => {
    const [dateIni, setDateIni] = useState(new Date());
    const [dateFin, setDateFin] = useState(new Date());
    const [data, setData] = useState(null)


    useEffect(() => {

    }, [data])

    const handleQuery = async (event) => {
        event.preventDefault()
        setData(null)
/*         const dateIniReal = convertDateTimeZone(dateIni)
        const dateFinReal = convertDateTimeZone(dateFin)
        console.log(dateIniReal, dateFinReal) */
        variableService.getHistoryVariable('alumbrado', dateIni, dateFin)
            .then(variable => {
/*                     setVariable(variable);
                    let date = new Date(variable['FECHA']);
                    let dateTime = date.getTime();
                    let dateTimeReal = dateTime - 18000000;
                    date.setTime(dateTimeReal);
                    setDateData(date.toLocaleString()); */
                    setData(variable)
                
            })
    }


    return (
<div className='Container History'>
            <h1>Históricos Alumbrado el Hato</h1>
            <form onSubmit={handleQuery}  className="Form-history">
                <input
                type='datetime-local'
                value={dateIni}
                min='2021-01-01'
                name='DateIni'
                onChange={({target}) => setDateIni(target.value)}
                />
                <input
                type='datetime-local'
                value={dateFin}
                min='2021-01-01'
                name='DateFin'
                onChange={({target}) => setDateFin(target.value)}
                />
                <button >Buscar</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th rowSpan="2">Fecha</th>
                    <th colSpan="2">Zona 1</th>
                    <th colSpan="2">Zona 2</th>
                    <th colSpan="2">Zona 3</th>
                </tr>
                <tr>
                    <th>Estado</th>
                    <th>Local/Remoto</th>
                    <th>Estado</th>
                    <th>Local/Remoto</th>
                    <th>Estado</th>
                    <th>Local/Remoto</th>
                </tr>

            </thead>
            <tbody>
            {
                data  ? 
                    (data.length ===0 ) ?
                        <tr><td colSpan="7">{'No hay ningún resultado para la busqueda'}</td></tr>
                    :
                        data.map((dataNew) => {
                            return Object.keys(dataNew).map((oneKey, i) => {
                                if (oneKey === 'data'){
                                    return dataNew[oneKey].map((file) => {
                                        return (
                                            <tr  key={file._id}>
                                                <td>{new Date(file.FECHA).toLocaleString()}</td>
                                                <td>{file.ENTRADA_1_AUTO === 1
                                                ? 'Automatico' : 'Manual' }</td>
                                                <td>{file.ENCENDIDO_1 === 1 
                                                ? "Encendido" : "Apagado"}</td> 
                                                <td>{file.ENTRADA_2_AUTO === 1
                                                ? 'Automatico' : 'Manual'}</td>
                                                <td>{file.ENCENDIDO_2 === 1 
                                                ? "Encendido" : "Apagado"}</td> 
                                                <td>{file.ENTRADA_3_AUTO === 1
                                                ? 'Automatico' : 'Manual' }</td>
                                                <td>{file.ENCENDIDO_3 === 1 
                                                ? "Encendido" : "Apagado"}</td>                                                                          
                                            </tr>
                                        )
                                    })                            
                                }
                            })
                        })
                : <tr><td colSpan="7">{'No hay ningún resultado para la busqueda'}</td></tr>
            }
            </tbody>
            </table>
            </div>
    )
}