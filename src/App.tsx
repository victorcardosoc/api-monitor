import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { lightTheme } from './styles/themes/light'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'

function App() {
  const [theme] = useState('dark')

  return (
    <ThemeProvider theme={theme === 'dark' ? defaultTheme : lightTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
