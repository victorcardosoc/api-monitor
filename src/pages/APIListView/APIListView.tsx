import { ListContainer, Column, CardListColumn } from './APIListView.style'
import { ActiveCard } from '../../components/ColumnsComponents/ActiveColumn/ActiveCard'
import { OfflineCard } from '../../components/ColumnsComponents/OfflineColumn/OfflineCard'
import { BannedCard } from '../../components/ColumnsComponents/BannedColumn/BannedCard'
import { CardListSize } from '../../components/ColumnsComponents/CardListSize/CardListSize'
import { ActiveListContext } from '../../contexts/activeListContext'
import { AlarmListContext } from '../../contexts/alarmListContext'
import { useContext } from 'react'
import { ActualShowModeContext } from '../../contexts/showListModeContext'

export function APIListView() {
  const { activeList } = useContext(ActiveListContext)
  const { alarmList } = useContext(AlarmListContext)
  const { actualShowMode } = useContext(ActualShowModeContext)

  return (
    <ListContainer display={actualShowMode === 'column' ? 'flex' : 'block'}>
      <Column>
        <CardListSize
          status="active"
          statusText="Ativas"
          listSize={activeList.length}
        />
        <CardListColumn>
          {activeList.map((activeItem, index) => {
            return <ActiveCard activeItem={activeItem} key={index} />
          })}
        </CardListColumn>
      </Column>

      <Column>
        <CardListSize
          status="offline"
          statusText="Fora"
          listSize={alarmList.length}
        />
        <CardListColumn>
          {alarmList.map((offlineItem, index) => {
            return <OfflineCard offlineItem={offlineItem} key={index} />
          })}
        </CardListColumn>
      </Column>

      <Column>
        <CardListSize
          status="banned"
          statusText="Banidas"
          listSize={alarmList.length}
        />
        <CardListColumn>
          {alarmList.map((bannedItem, index) => {
            return <BannedCard bannedItem={bannedItem} key={index} />
          })}
        </CardListColumn>
      </Column>
    </ListContainer>
  )
}
