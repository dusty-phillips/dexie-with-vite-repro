import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import db, { DexieContext } from './database'

ReactDOM.render(
  <React.StrictMode>
    <DexieContext.Provider value={db}>
      <App />
    </DexieContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
