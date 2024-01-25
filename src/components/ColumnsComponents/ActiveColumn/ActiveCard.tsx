import { List } from 'phosphor-react'
import { CardContainer, FirstLine, IconDiv } from './ActiveCard.styles'

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
        <IconDiv>
          <List size={20} />
        </IconDiv>
      </FirstLine>
      <p>
        <strong>Cliente: </strong>
        {activeItem.clientename}
      </p>
    </CardContainer>
  )
}
