import { ColumnContainer, Column, CardListColumn } from './Column.style'
import { ActiveCard } from '../../components/ColumnsComponents/ActiveColumn/ActiveCard'
import { OfflineCard } from '../../components/ColumnsComponents/OfflineColumn/OfflineCard'
import { BannedCard } from '../../components/ColumnsComponents/BannedColumn/BannedCard'
import { CardListSize } from '../../components/ColumnsComponents/CardListSize/CardListSize'
import { ActiveListContext } from '../../contexts/activeListContext'
import { AlarmListContext } from '../../contexts/alarmListContext'
import { useContext } from 'react'

export function ColumnView() {
  const { activeList } = useContext(ActiveListContext)
  const { alarmList } = useContext(AlarmListContext)

  return (
    <ColumnContainer>
      <Column>
        <CardListSize
          status="active"
          statusText="Ativas"
          listSize={activeList.length}
        />
        <CardListColumn>
          {activeList.map((activeItem) => {
            return <ActiveCard activeItem={activeItem} key={activeItem.id} />
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
          {alarmList.map((offlineItem) => {
            return (
              <OfflineCard offlineItem={offlineItem} key={offlineItem.id} />
            )
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
          {alarmList.map((bannedItem) => {
            return <BannedCard bannedItem={bannedItem} key={bannedItem.id} />
          })}
        </CardListColumn>
      </Column>
    </ColumnContainer>
  )
}
