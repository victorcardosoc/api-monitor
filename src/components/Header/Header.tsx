import {
  HeaderContainer,
  HeaderTitle,
  HeaderConfigIcon,
  FunctionsContainer,
  UpdateAllContainer,
  UpdateIcon,
  TimerDiv,
} from './Header.styles'
import { GearSix, ArrowsClockwise } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Monitoramento</HeaderTitle>
      <FunctionsContainer>
        <UpdateAllContainer>
          <TimerDiv>60s</TimerDiv>
          <UpdateIcon>
            <ArrowsClockwise size={20} />
          </UpdateIcon>
        </UpdateAllContainer>
        <HeaderConfigIcon>
          <GearSix size={20} />
        </HeaderConfigIcon>
      </FunctionsContainer>
    </HeaderContainer>
  )
}
