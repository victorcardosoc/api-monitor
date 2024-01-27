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
  getActiveList: () => void
  updateActive: (activeModel: ActiveType) => void
  deleteActiveAPI: (activeModelId: number) => void
  filterActiveList: (filterInput: string) => void
}

interface ActiveListProviderProps {
  children: ReactNode
}

export const ActiveListContext = createContext({} as ActiveListContextType)

export function ActiveListProvider({ children }: ActiveListProviderProps) {
  const [activeList, setActiveList] = useState<ActiveType[]>([])

  const URL = import.meta.env.VITE_API_URL

  function filterActiveList(inputFilter: string) {
    getActiveList().then((res) => {
      setActiveList(
        res.filter((activeItem: ActiveType) => {
          return (
            activeItem.clientename
              .toUpperCase()
              .includes(inputFilter.toUpperCase()) ||
            activeItem.numero.toUpperCase().includes(inputFilter.toUpperCase())
          )
        }),
      )
    })
  }

  async function getActiveList() {
    const response = await fetch(`${URL}listClientActive`)
    const data = await response.json()

    setActiveList(data)
    return data
  }

  async function updateActive(activeModel: ActiveType) {
    await fetch(`${URL}listClientActive/${activeModel.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activeModel),
    })

    getActiveList()
  }

  async function deleteActiveAPI(activeModelId: number) {
    await fetch(`${URL}listClientActive/${activeModelId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    getActiveList()
  }

  useEffect(() => {
    getActiveList()
  }, [])

  return (
    <ActiveListContext.Provider
      value={{
        activeList,
        getActiveList,
        updateActive,
        deleteActiveAPI,
        filterActiveList,
      }}
    >
      {children}
    </ActiveListContext.Provider>
  )
}
