import './App.css';
import { Variable } from './Variable.js'
import { getDataVariable } from './services/online/getDataVariable.js'
import {useState, useEffect} from 'react'


function App() {
  const [variable, setVariable] = useState([]);
  useEffect(() => {
    getDataVariable()
    .then(variable => {
      setVariable(variable);
  })
}, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <h1>Compuertas Neusa</h1>
        <table>
          <thead>
            <tr>
            <th>FECHA</th>
            <th>ENT1_FALLA_1</th>
            <th>ENT3_AUT_1</th>
            <th>ENT4_CERR_1</th>
            <th>ENT5_ABIER_1</th>
            <th>ENT6_FALLA_2</th>
            <th>ENT8_AUT_2</th>
            <th>ENT2_1_CERR_2HMI</th>
            <th>ENT2_2_ABIER_2HMI</th>
            <th>ENT2_3_FALL_3</th>
            <th>ENT2_5_AUTO_3</th>
            <th>ENT2_6_CERR_3</th>
            <th>ENT2_7_ABIER_3</th>
            </tr>
          </thead>
          <tbody>
        {variable.map((data) =>{
            return data.data.map((logger) =>{
              console.log({...logger});
              return <Variable key={logger._Id} {...logger} />
            })
        })}
        </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
