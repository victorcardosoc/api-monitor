import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  DropdownContainer,
  DropdownIcon,
  DropdownItem,
} from './Dropdown.styles'
import { List, Trash, PencilSimple, Prohibit } from 'phosphor-react'
import { ConfirmActionModal } from '../../Modals/ConfirmAction/ConfirmActionModal'
import { MonitorModal } from '../../Modals/Monitor/MonitorModal'

interface DropwdownParams {
  APINumber: string,
  APIClient: string,
  listType: 'actives' | 'alarms'
}

export function DropdownMenuCard({APINumber, APIClient, listType}: DropwdownParams ) {
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
            <ConfirmActionModal questionValues={{APINumber:`${APINumber}`, APIClient:`${APIClient}`}} actionType={'delete'}  />
          </DropdownItem>
          <DropdownItem>
            <PencilSimple /> <p>Editar</p>
          </DropdownItem>
          {listType == 'alarms' ?
          <DropdownItem>
            <ConfirmActionModal questionValues={{APINumber:`${APINumber}`, APIClient:`${APIClient}`}}  actionType={'ban'}/>
          </DropdownItem> : ''
          }
        </DropdownContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
