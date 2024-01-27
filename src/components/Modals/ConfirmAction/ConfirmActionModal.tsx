import * as Dialog from '@radix-ui/react-dialog'
import { Trash, Prohibit, X } from 'phosphor-react'
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
  CloseAndSaveDialog,
  ItemContainer,
  DialogDescription,
  InfoText,
  ButtonsContainer,
} from './ConfirmActionModal.styles'
import { useContext, useState } from 'react'
import { ActiveListContext } from '../../../contexts/activeListContext'
import { AlarmListContext } from '../../../contexts/alarmListContext'

interface ConfirmModalType {
  questionValues: {
    APINumber: string
    APIClient: string
    APIId: number
  }
  listType: 'actives' | 'alarms'
  actionType: 'ban' | 'delete'
}

export function ConfirmActionModal({
  questionValues,
  actionType,
  listType,
}: ConfirmModalType) {
  const { deleteActiveAPI } = useContext(ActiveListContext)
  const { deleteAlarmAPI } = useContext(AlarmListContext)
  const [dialogOpen, setDialogOpen] = useState(false)

  function confirmDeletionOrBan() {
    if (actionType === 'delete') {
      if (listType === 'actives') {
        deleteActiveAPI(questionValues.APIId)
      } else {
        deleteAlarmAPI(questionValues.APIId)
      }
    }
    closeDialog()
  }

  function closeDialog() {
    setDialogOpen(false)
  }

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <ItemContainer>
          {actionType === 'delete' ? (
            <>
              <Trash />
              <p>Excluir</p>
            </>
          ) : (
            <>
              <Prohibit />
              <p>Banir</p>
            </>
          )}
        </ItemContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            {actionType === 'delete' ? (
              <>
                <p>Excluir API</p>
              </>
            ) : (
              <>
                <p>Banir API</p>
              </>
            )}
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

          <DialogDescription>
            <InfoText>Número: {questionValues.APINumber}</InfoText>
            <InfoText>Cliente: {questionValues.APIClient}</InfoText>
          </DialogDescription>

          <ButtonsContainer>
            <CloseAndSaveDialog onClick={confirmDeletionOrBan}>
              {actionType === 'delete' ? 'Excluir' : 'Banir '}
            </CloseAndSaveDialog>
            <CloseAndSaveDialog onClick={closeDialog}>
              Cancelar
            </CloseAndSaveDialog>
          </ButtonsContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
