import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import GlobalState from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>
  </StrictMode>,
)
