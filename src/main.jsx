import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Assembly from './assembly/Assembly'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assembly />
  </StrictMode>,
)
