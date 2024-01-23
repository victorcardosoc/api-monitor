import { List } from 'phosphor-react'
import { CardContainer, FirstLine, IconDiv } from './ActiveCard.styles'

export function ActiveCard() {
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>1234
        </p>
        <IconDiv>
          <List size={20} />
        </IconDiv>
      </FirstLine>
      <p>
        <strong>Cliente: </strong>ACME Corp
      </p>
    </CardContainer>
  )
}
