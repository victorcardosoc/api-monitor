import { List } from 'phosphor-react'
import { CardContainer, FirstLine, IconDiv } from './OfflineCard.styles'

export function OfflineCard() {
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
      <p>
        <strong>Tempo Fora: </strong>120000
      </p>
      <p>
        <strong>Monitorado por: </strong>120000
      </p>
    </CardContainer>
  )
}
