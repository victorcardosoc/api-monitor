import { createContext, useState, useEffect } from 'react'

interface ActualModeType {
  actualShowMode: string
  changeMode: () => void
}

export const ActualShowModeContext = createContext({} as ActualModeType)

export function ActualShowModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const localStorageTheme = localStorage.getItem('IPSolution-ShowMode')

  const [actualShowMode, setActualShowMode] = useState(
    localStorageTheme || 'column',
  )

  useEffect(() => {
    localStorage.setItem('IPSolution-ShowMode', actualShowMode)
  }, [actualShowMode])

  function changeMode() {
    setActualShowMode(actualShowMode === 'column' ? 'row' : 'column')
  }

  return (
    <ActualShowModeContext.Provider value={{ actualShowMode, changeMode }}>
      {children}
    </ActualShowModeContext.Provider>
  )
}
