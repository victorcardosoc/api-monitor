import { ReactNode, createContext, useEffect, useState } from "react";

interface AlarmType {
  status: string;
  chatId: string;
  color: string;
  customer: string;
  date: string;
  id: number;
  last_send_api: string;
  monitorado?: string;
  number: string;
  provider: string;
  qtde: number;
  timeoff: number;
}

interface AlarmListContextType {
  alarmList: AlarmType[];
  getAlarmList: () => void;
  updateAlarm: (alarmModel: AlarmType) => void;
  deleteAlarmAPI: (alarmModelId: number) => void;
  filterAlarmList: (filterInput: string) => void;
}

interface AlarmListProviderProps {
  children: ReactNode;
}

export const AlarmListContext = createContext({} as AlarmListContextType);

export function AlarmListProvider({ children }: AlarmListProviderProps) {
  const [alarmList, setAlarmList] = useState<AlarmType[]>([]);

  function filterAlarmList(inputFilter: string) {
    getAlarmList().then((res) => {
      setAlarmList(
        res.filter((alarmItem: AlarmType) => {
          return (
            alarmItem.customer
              .toUpperCase()
              .includes(inputFilter.toUpperCase()) ||
            alarmItem.number.toUpperCase().includes(inputFilter.toUpperCase())
          );
        })
      );
    });
  }

  async function getAlarmList() {
    const response = await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels`
    );
    const data = await response.json();
    const inativos = data.filter((activeItem: AlarmType) => {
      return (
        activeItem.status != "inChat" && activeItem.status != "autocloseCalled"
      );
    });
    setAlarmList(inativos);
    return inativos;
  }

  async function updateAlarm(alarmModel: AlarmType) {
    await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels/${alarmModel.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alarmModel),
      }
    );

    getAlarmList();
  }

  async function deleteAlarmAPI(alarmModelId: number) {
    await fetch(
      `http://monitoramento.ipsolutiontelecom.com.br:3000/channels/${alarmModelId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getAlarmList();
  }

  useEffect(() => {
    getAlarmList();
  }, []);

  return (
    <AlarmListContext.Provider
      value={{
        alarmList,
        getAlarmList,
        updateAlarm,
        deleteAlarmAPI,
        filterAlarmList,
      }}
    >
      {children}
    </AlarmListContext.Provider>
  );
}
