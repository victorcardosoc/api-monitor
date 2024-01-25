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
import { useContext, useEffect, useState } from 'react'
import { ActiveListContext } from '../../contexts/activeListContext'
import { AlarmListContext } from '../../contexts/alarmListContext'

export function Header() {
  const { getActiveList, activeList } = useContext(ActiveListContext)
  const { getAlarmList, alarmList } = useContext(AlarmListContext)

  const [timer, setTimer] = useState(60)
  const [intervalId, setIntervalId] = useState(0)

  function getLists() {
    getActiveList()
    getAlarmList()
  }

  function initInterval() {
    clearInterval(intervalId)
    setTimer(60)

    setIntervalId(
      setInterval(() => {
        setTimer((actualTimer) => {
          return actualTimer - 1
        })
      }, 1000),
    )
  }

  useEffect(() => {
    initInterval()

    return () => {
      clearInterval(intervalId)
    }
  }, [activeList, alarmList])

  useEffect(() => {
    if (timer === 0) {
      getLists()
    }
  }, [timer])

  return (
    <HeaderContainer>
      <HeaderTitle>Monitoramento</HeaderTitle>
      <FunctionsContainer>
        <UpdateAllContainer>
          <TimerDiv>{timer}s</TimerDiv>
          <UpdateIcon onClick={getLists}>
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
