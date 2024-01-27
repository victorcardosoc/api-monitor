import {
  CardContainer,
  FirstLine,
  MonitorDiv,
  MonitorNameContainer,
} from './OfflineCard.styles'
import { MonitorModal } from '../../Modals/Monitor/MonitorModal'
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
  const { updateAlarm } = useContext(AlarmListContext)

  function updateAPI(newValue: OfflineType) {
    updateAlarm(newValue.offlineItem)
  }

  function deleteMonitorAndUpdate() {
    offlineItem.monitorado = undefined
    updateAlarm(offlineItem)
  }

  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {offlineItem.number}
        </p>
        <DropdownMenuCard
          APIAlarm={offlineItem}
          listType={'alarms'}
          hasOffline
        />
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
          <MonitorNameContainer>
            {' '}
            {offlineItem.monitorado}{' '}
            <MinusCircle size={20} onClick={deleteMonitorAndUpdate} />
          </MonitorNameContainer>
        ) : (
          <MonitorModal offlineItem={offlineItem} updateItem={updateAPI} />
        )}
      </MonitorDiv>
    </CardContainer>
  )
}
