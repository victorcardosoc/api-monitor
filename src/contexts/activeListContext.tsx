import { ReactNode, createContext, useEffect, useState } from "react";

interface ActiveType {
  status: string;
  chatId: string;
  clientename: string;
  clinica?: string;
  id: number;
  numero: string;
  status_customer: boolean;
}

interface ActiveListContextType {
  activeList: ActiveType[];
  getActiveList: () => void;
  updateActive: (activeModel: ActiveType) => void;
  deleteActiveAPI: (activeModelId: number) => void;
  filterActiveList: (filterInput: string) => void;
}

interface ActiveListProviderProps {
  children: ReactNode;
}

export const ActiveListContext = createContext({} as ActiveListContextType);

export function ActiveListProvider({ children }: ActiveListProviderProps) {
  const [activeList, setActiveList] = useState<ActiveType[]>([]);

  function filterActiveList(inputFilter: string) {
    getActiveList().then((res: any) => {
      setActiveList(
        res.filter((activeItem: ActiveType) => {
          return (
            activeItem.clientename
              .toUpperCase()
              .includes(inputFilter.toUpperCase()) ||
            activeItem.chatId.toUpperCase().includes(inputFilter.toUpperCase())
          );
        })
      );
    });
  }

  async function getActiveList() {
    const response = await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels`
    );
    const data = await response.json();
    const ativos = data.filter((activeItem: ActiveType) => {
      return (
        activeItem.status === "inChat" ||
        activeItem.status === "autocloseCalled"
      );
    });
    console.log(ativos);

    setActiveList(ativos);
  }

  async function updateActive(activeModel: ActiveType) {
    await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels/${activeModel.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(activeModel),
      }
    );

    getActiveList();
  }

  async function deleteActiveAPI(activeModelId: number) {
    await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels/${activeModelId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getActiveList();
  }

  useEffect(() => {
    getActiveList();
  }, []);

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
  );
}
