import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ActualThemeProvider } from './contexts/actualThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ActualThemeProvider>
      <App />
    </ActualThemeProvider>
  </React.StrictMode>,
)
