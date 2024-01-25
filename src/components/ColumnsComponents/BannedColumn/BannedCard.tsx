import { CardContainer, FirstLine, IconDiv } from './BannedCard.styles'
import { List } from 'phosphor-react'

interface BannedType {
  bannedItem: {
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

export function BannedCard({ bannedItem }: BannedType) {
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {bannedItem.number}
        </p>
        <IconDiv>
          <List size={20} />
        </IconDiv>
      </FirstLine>
      <p>
        <strong>Cliente: </strong>
        {bannedItem.customer}
      </p>
      <p>
        <strong>Tempo Fora: </strong>
        {bannedItem.timeoff}
      </p>
      <p>
        <strong>Banido por: </strong>
        {bannedItem.monitorado}
      </p>
    </CardContainer>
  )
}
