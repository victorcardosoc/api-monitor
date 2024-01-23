import { Header } from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  const [theme] = useState('dark')

  return (
    <ThemeProvider theme={theme === 'dark' ? defaultTheme : lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
