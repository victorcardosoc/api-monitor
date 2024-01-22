import { HeaderContainer, HeaderTitle, HeaderConfigIcon } from './Header.styles'
import { GearSix } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Monitoramento</HeaderTitle>
      <HeaderConfigIcon>
        <GearSix size={20} />
      </HeaderConfigIcon>
    </HeaderContainer>
  )
}
