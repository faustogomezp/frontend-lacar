import {useState, useEffect} from 'react'
import { getDataVariable } from '../services/online/getDataVariable.js'

export const Variable = ({logger, title}) => {
  const [variable, setVariable] = useState([]);
  useEffect(() => {
    getDataVariable(logger)
    .then(variable => {
        setVariable(variable);
    })
  }, [variable, logger])

  return (
    <div className="App">
      <main>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>
              Variables
            </th>
            <th>
              Valores
            </th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(variable).map((oneKey, i) => {
              return (
                <tr key={i}>
                  <td>{oneKey}</td>
                  <td>{variable[oneKey]}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      </main>
    </div>
  )
  
}