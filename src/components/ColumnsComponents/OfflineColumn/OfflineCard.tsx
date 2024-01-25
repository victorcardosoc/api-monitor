import { List, PlusCircle } from 'phosphor-react'
import {
  CardContainer,
  FirstLine,
  IconDiv,
  MonitorDiv,
} from './OfflineCard.styles'

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
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {offlineItem.number}
        </p>
        <IconDiv>
          <List size={20} />
        </IconDiv>
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
          offlineItem.monitorado
        ) : (
          <PlusCircle size={20} />
        )}
      </MonitorDiv>
    </CardContainer>
  )
}
