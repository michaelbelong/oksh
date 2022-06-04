import './assets/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './custom'
import App from './App'

const element = document.getElementById('root')
const root = createRoot(element)
// console.clear()

root.render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)