import { DropdownMenuCard } from '../CardsDropdown/Dropdown'
import { CardContainer, FirstLine } from './BannedCard.styles'

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
        <DropdownMenuCard
          APINumber={bannedItem.number}
          APIClient={bannedItem.customer}
          listType={'alarms'}
        />
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
