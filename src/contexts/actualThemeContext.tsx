import { createContext, useState, useEffect } from 'react'

interface ActualThemeType {
  actualTheme: string
  changeTheme: () => void
}

export const ActualThemeContext = createContext({} as ActualThemeType)

export function ActualThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const localStorageTheme = localStorage.getItem('IPSolution-LayoutTheme')

  const [actualTheme, setActualTheme] = useState(localStorageTheme || 'dark')

  useEffect(() => {
    localStorage.setItem('IPSolution-LayoutTheme', actualTheme)
  }, [actualTheme])

  function changeTheme() {
    setActualTheme(actualTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ActualThemeContext.Provider value={{ actualTheme, changeTheme }}>
      {children}
    </ActualThemeContext.Provider>
  )
}
