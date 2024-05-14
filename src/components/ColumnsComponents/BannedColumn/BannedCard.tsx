import { DropdownMenuCard } from "../CardsDropdown/Dropdown";
import { CardContainer, FirstLine } from "./BannedCard.styles";

interface BannedType {
  bannedItem: {
    chatId: string;
    status: string;
    color: string;
    customer: string;
    date: string;
    id: number;
    last_send_api: string;
    monitorado?: string;
    number: string;
    provider: string;
    qtde: number;
    timeoff: number;
  };
}

export function BannedCard({ bannedItem }: BannedType) {
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {bannedItem.number}
        </p>
        <DropdownMenuCard APIAlarm={bannedItem} listType={"alarms"} />
      </FirstLine>
      <p>
        <strong>Status: </strong>
        {bannedItem.status}
      </p>
      <p>
        <strong>Tempo Fora: </strong>
        {bannedItem.timeoff}
      </p>
      <p>
        <strong>Banido por: </strong>
        {bannedItem.monitorado}
      </p>
    </CardContainer>
  );
}
