import {useState, useEffects} from 'react'
import { getDataVariable } from '../services/online/getDataVariable.js'

export const Variable = ({logger}) => {
  const [variable, setVariable] = useState([]);
  getDataVariable(logger)
  .then(variable => {
      setVariable(variable);
  })
  return (
    <div className="App">
      <main>
      <h1>Compuerta Neusa</h1>
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