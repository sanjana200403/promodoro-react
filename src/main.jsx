import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SettingsContextProvider from './Context/SettingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsContextProvider>

    <App />
    </SettingsContextProvider>
  </React.StrictMode>,
)
