import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainCalculator from './pages/calculadora/MainCalculator.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainCalculator />
  </StrictMode>,
)
