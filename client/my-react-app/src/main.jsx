import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.scss'
import { AuthContext, AuthContextProvider } from './components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
   
   
  </React.StrictMode>
)
