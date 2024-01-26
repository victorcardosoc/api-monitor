import {
  CardContainer,
  FirstLine,
  MonitorDiv,
  MonitorNameContainer
} from './OfflineCard.styles'
import { MonitorModal } from './Modals/MonitorModal'
import { DropdownMenuCard } from '../CardsDropdown/Dropdown'
import { useContext } from 'react'
import { AlarmListContext } from '../../../contexts/alarmListContext'
import { MinusCircle } from 'phosphor-react'

interface OfflineType {
  offlineItem: {
    color: string
    customer: string
    date: string
    id: number
    last_send_api: string
    monitorado?: string
    number: string 
    provider: string
    qtde: number
    timeoff: number
  }
}

export function OfflineCard({ offlineItem }: OfflineType) {

  const {updateAlarmList} = useContext(AlarmListContext)

  function updateAPI(newValue: OfflineType){
    updateAlarmList(newValue.offlineItem)
  }

  function deleteMonitorAndUpdate(){
    offlineItem.monitorado = undefined,
    updateAlarmList(offlineItem)
  }


  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {offlineItem.number}
        </p>
        <DropdownMenuCard />
      </FirstLine>
      <p>
        <strong>Cliente: </strong>
        {offlineItem.customer}
      </p>
      <p>
        <strong>Tempo Fora: </strong>
        {offlineItem.timeoff}
      </p>
      <MonitorDiv>
        <strong>Monitorado por: </strong>
        {offlineItem.monitorado != null ? (
         <MonitorNameContainer> {offlineItem.monitorado} <MinusCircle size={20} onClick={deleteMonitorAndUpdate} /></MonitorNameContainer>
        ) : (
          <MonitorModal  offlineItem={offlineItem} updateItem={updateAPI} />
        )}
      </MonitorDiv>
    </CardContainer>
  )
}
