import '../App.css';
import {useState, useEffect} from 'react'
import variableService from '../services/online/getDataVariable.js'


export const HistoryReguladora = () => {
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
        variableService.getHistoryVariable('valvula', dateIni, dateFin)
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
            <h1>Históricos Embalse</h1>
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
                    <th>Fecha</th>
                    <th>LIT</th>
                    <th>PIT</th>
                    <th>FIT</th>
                    <th>Estado Reguladora</th>
                    <th>ZT</th>
                    <th>Estado Valvula Corte</th>
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
                                                <td>{file.LIT_FALLA === 1 
                                                ? 'Fail' : file.LIT_NEUSA}</td>
                                                <td>{file.PIT_FALLA === 1 
                                                ? 'Fail' : file.PIT_NEUSA}</td> 
                                                <td>{file.FIT_FALLA === 1 
                                                ? 'Fail' : file.FIT_NEUSA}</td>   
                                                <td>{file.FAL_REG === 1 
                                                ? 'Fail' : file.REM_REG === 1 
                                                ? 'Remoto' : file.LOC_REG === 1 
                                                ? 'Local' : ''}</td>
                                                <td>{file.ZT_FALLA === 1
                                                ? 'Fail' : file.ZT_NEUSA}</td>
                                                <td>{file.LOC_CORTE === 0 && file.REM_CORTE === 1 
                                                ? 'Remoto' : file.LOC_CORTE === 1 && file.REM_CORTE === 0 
                                                ? 'Local' : 'Fail'}</td>                                                                          
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