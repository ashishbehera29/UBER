import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserCon from './context/UserCon.jsx'
import CaptainContext from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <UserCon>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserCon>
    </CaptainContext>
  </StrictMode>
)
