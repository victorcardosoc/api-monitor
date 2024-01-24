import { ColumnContainer, Column, CardListColumn } from './Column.style'
import { ActiveCard } from '../../components/ColumnsComponents/ActiveColumn/ActiveCard'
import { OfflineCard } from '../../components/ColumnsComponents/OfflineColumn/OfflineCard'
import { BannedCard } from '../../components/ColumnsComponents/BannedColumn/BannedCard'
import { CardListSize } from '../../components/ColumnsComponents/CardListSize/CardListSize'

export function ColumnView() {
  return (
    <ColumnContainer>
      <Column>
        <CardListSize status="active" statusText="Ativas" listSize={10} />
        <CardListColumn>
          <ActiveCard />
          <ActiveCard />
          <ActiveCard />
        </CardListColumn>
      </Column>
      <Column>
        <CardListSize status="offline" statusText="Fora" listSize={10} />
        <CardListColumn>
          <OfflineCard />
          <OfflineCard />
          <OfflineCard />
        </CardListColumn>
      </Column>
      <Column>
        <CardListSize status="banned" statusText="Banidas" listSize={10} />
        <CardListColumn>
          <BannedCard />
          <BannedCard />
          <BannedCard />
        </CardListColumn>
      </Column>
    </ColumnContainer>
  )
}
