import { ColumnContainer, Column } from './Column.style'
import { ActiveCard } from '../../components/ColumnsComponents/ActiveColumn/ActiveCard'
import { OfflineCard } from '../../components/ColumnsComponents/OfflineColumn/OfflineCard'
import { BannedCard } from '../../components/ColumnsComponents/BannedColumn/BannedCard'

export function ColumnView() {
  return (
    <ColumnContainer>
      <Column>
        <ActiveCard />
      </Column>
      <Column>
        <OfflineCard />
      </Column>
      <Column>
        <BannedCard />
      </Column>
    </ColumnContainer>
  )
}
