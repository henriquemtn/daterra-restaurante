import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/Sections/Navbar/index.tsx'
import Rotas from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Rotas />
  </React.StrictMode>,
)
