import './index.css'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import App from '.'

createRoot(document.getElementById('root')!).render(<App><Routes /></App>)
