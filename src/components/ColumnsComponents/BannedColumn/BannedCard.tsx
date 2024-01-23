import { CardContainer, FirstLine, IconDiv } from './BannedCard.styles'
import { List } from 'phosphor-react'
export function BannedCard() {
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
        <strong>Banido por: </strong>120000
      </p>
    </CardContainer>
  )
}
