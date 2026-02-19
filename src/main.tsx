import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client'
import { RoutesComponent } from './Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>
)
