import '../App.css';
import {useState, useEffect} from 'react'
import variableService from '../services/online/getDataVariable.js'


export const HistoryCompuertas = () => {
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
        variableService.getHistoryVariable('compuertas', dateIni, dateFin)
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
            <h1>Históricos Compuertas</h1>
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
                    <th colSpan="2">Compuerta 1</th>
                    <th colSpan="2">Compuerta 2</th>
                    <th colSpan="2">Compuerta 3</th>
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
                                                <td>{file.ENT5_ABIER_1 === 1 
                                                ? 'Abierta' :  file.ENT4_CERR_1 === 0
                                                ? 'Cerrada' :  file.ENT1_FALLA_1 === 1 
                                                ? 'Fail' :  'Entre Abierta' }</td>
                                                <td>{file.ENT2_MAN_1 === 1 
                                                ? 'Local' : file.ENT3_AUT_1 === 1
                                                ? 'Remoto' : ''}</td> 
                                                <td>{file.ENT2_2_ABIER_2HMI === 1 
                                                ? 'Abierta' :  file.ENT2_1_CERR_2HMI === 0
                                                ? 'Cerrada' :  file.ENT6_FALLA_2 === 1 
                                                ? 'Fail' :  'Entre Abierta' }</td>
                                                <td>{file.ENT7_MAN_2 === 1 
                                                ? 'Local' : file.ENT8_AUT_2 === 1
                                                ? 'Remoto' : ''}</td> 
                                                <td>{file.ENT2_7_ABIER_3_HMI === 1 
                                                ? 'Abierta' :  file.ENT2_6_CERR_3_HMI === 0
                                                ? 'Cerrada' :  file.ENT2_3_FALL_3_HMI === 1 
                                                ? 'Fail' :  'Entre Abierta' }</td>
                                                <td>{file.ENT2_4_MAN_3_HMI === 1 
                                                ? 'Local' : file.ENT2_5_AUTO_3_HMI === 1
                                                ? 'Remoto' : ''}</td>                                                                          
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