import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.tsx'
import StateProvider from './provider/StateProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
