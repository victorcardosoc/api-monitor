import { Header } from './components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'
import { GlobalStyle } from './styles/global'
import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ActualThemeContext } from './contexts/actualThemeContext'

function App() {
  const { actualTheme } = useContext(ActualThemeContext)

  return (
      <ThemeProvider theme={actualTheme === 'dark' ? defaultTheme : lightTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
