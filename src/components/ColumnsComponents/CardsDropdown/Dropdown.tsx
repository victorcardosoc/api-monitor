import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  DropdownContainer,
  DropdownIcon,
  DropdownItem,
} from './Dropdown.styles'
import { List, Trash, PencilSimple, Prohibit } from 'phosphor-react'

export function DropdownMenuCard() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <DropdownIcon>
          <List size={20} />
        </DropdownIcon>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownContainer>
          <DropdownItem>
            <Trash /> <p>Excluir</p>
          </DropdownItem>
          <DropdownItem>
            <PencilSimple /> <p>Editar</p>
          </DropdownItem>
          <DropdownItem>
            <Prohibit /> <p>Banir</p>
          </DropdownItem>
        </DropdownContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
