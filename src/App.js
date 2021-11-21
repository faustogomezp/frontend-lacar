import './App.css';
import React from 'react'
import {AppRouter} from './routers/AppRouter'
import AuthProvider from './auth/AuthProvider'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
