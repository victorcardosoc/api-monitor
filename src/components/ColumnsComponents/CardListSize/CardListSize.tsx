import { CardContainer, InfoContainer, InfoText } from './CardListSize.styles'

interface listProps {
  status: 'offline' | 'active' | 'banned'
  statusText: 'Fora' | 'Ativas' | 'Banidas'
  listSize?: number
}

export function CardListSize({ status, statusText, listSize = 0 }: listProps) {
  return (
    <CardContainer status={status}>
      <InfoContainer>
        <InfoText>{statusText}</InfoText>
        <InfoText>{listSize}</InfoText>
      </InfoContainer>
    </CardContainer>
  )
}
