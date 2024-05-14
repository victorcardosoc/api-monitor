import { CardContainer, FirstLine } from "./ActiveCard.styles";
import { DropdownMenuCard } from "../CardsDropdown/Dropdown";

interface ActiveType {
  activeItem: {
    chatId: string;
    status: string;
    clientename: string;
    clinica?: string;
    id: number;
    numero: string;
    status_customer: boolean;
  };
}

export function ActiveCard({ activeItem }: ActiveType) {
  return (
    <CardContainer>
      <FirstLine>
        <p>
          <strong>Número: </strong>
          {activeItem.chatId}
        </p>
        <DropdownMenuCard APIActive={activeItem} listType={"actives"} />
      </FirstLine>
      <p>
        <strong>Status: </strong>
        {activeItem.status}
      </p>
    </CardContainer>
  );
}
