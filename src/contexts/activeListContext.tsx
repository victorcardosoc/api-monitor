import { ReactNode, createContext, useEffect, useState } from 'react'

interface ActiveType {
  clientename: string
  clinica?: string
  id: number
  numero: string
  status_customer: boolean
}

interface ActiveListContextType {
  activeList: ActiveType[]
  getActiveList: () => object
}

interface ActiveListProviderProps {
  children: ReactNode
}

export const ActiveListContext = createContext({} as ActiveListContextType)

export function ActiveListProvider({ children }: ActiveListProviderProps) {
  const [activeList, setActiveList] = useState<ActiveType[]>([])

  const URL = import.meta.env.VITE_API_URL

  async function getActiveList() {
    const response = await fetch(`${URL}listClientActive`)
    const data = await response.json()

    setActiveList(data)
  }

  useEffect(() => {
    getActiveList()
  }, [])

  return (
    <ActiveListContext.Provider value={{ activeList, getActiveList }}>
      {children}
    </ActiveListContext.Provider>
  )
}
