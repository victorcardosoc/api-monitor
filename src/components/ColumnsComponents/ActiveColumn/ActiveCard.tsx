import { CardContainer, FirstLine } from './ActiveCard.styles'
import { DropdownMenuCard } from '../CardsDropdown/Dropdown'

interface ActiveType {
  activeItem: {
    clientename: string
    clinica?: string
    id: number
    numero: string
    status_customer: boolean
  }
}

export function ActiveCard({ activeItem }: ActiveType) {
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {activeItem.numero}
        </p>
        <DropdownMenuCard APINumber={activeItem.numero} APIClient={activeItem.clientename} listType={'actives'} />
      </FirstLine>
      <p>
        <strong>Cliente: </strong>
        {activeItem.clientename}
      </p>
    </CardContainer>
  )
}
