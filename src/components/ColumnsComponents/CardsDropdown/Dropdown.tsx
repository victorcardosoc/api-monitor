import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  DropdownBlackIcon,
  DropdownContainer,
  DropdownIcon,
  DropdownItem,
} from './Dropdown.styles'
import { List } from 'phosphor-react'
import { ConfirmActionModal } from '../../Modals/ConfirmAction/ConfirmActionModal'
import { EditModal } from '../../Modals/EditApiModals/EditAPI'

interface DropwdownParams {
  APIActive?: {
    clientename: string
    clinica?: string
    id: number
    numero: string
    status_customer: boolean
  }
  APIAlarm?: {
    color: string
    customer: string
    date: string
    id: number
    last_send_api: string
    monitorado?: string
    number: string
    provider: string
    qtde: number
    timeoff: number
  }
  listType: 'actives' | 'alarms'
  hasOffline?: boolean
}

export function DropdownMenuCard({
  APIActive,
  APIAlarm,
  listType,
  hasOffline = false,
}: DropwdownParams) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {hasOffline ? (
          <DropdownBlackIcon>
            <List size={20} />
          </DropdownBlackIcon>
        ) : (
          <DropdownIcon>
            <List size={20} />
          </DropdownIcon>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownContainer>
          <DropdownItem>
            <ConfirmActionModal
              questionValues={{
                APINumber: `${APIActive ? APIActive.numero : APIAlarm ? APIAlarm.number : 'Inválido'}`,
                APIClient: `${APIActive ? APIActive.clientename : APIAlarm ? APIAlarm.customer : 'Inválido'}`,
                APIId: Number(
                  `${APIActive ? APIActive.id : APIAlarm ? APIAlarm.id : 0}`,
                ),
              }}
              listType={listType}
              actionType={'delete'}
            />
          </DropdownItem>
          <DropdownItem>
            <EditModal
              activeItem={APIActive}
              alarmItem={APIAlarm}
              listType={listType}
            />
          </DropdownItem>
          {listType === 'alarms' ? (
            <DropdownItem>
              <ConfirmActionModal
                questionValues={{
                  APINumber: `${APIActive ? APIActive.numero : APIAlarm ? APIAlarm.number : 'Inválido'}`,
                  APIClient: `${APIActive ? APIActive.clientename : APIAlarm ? APIAlarm.customer : 'Inválido'}`,
                  APIId: Number(
                    `${APIActive ? APIActive.id : APIAlarm ? APIAlarm.id : 0}`,
                  ),
                }}
                listType={listType}
                actionType={'ban'}
              />
            </DropdownItem>
          ) : (
            ''
          )}
        </DropdownContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
