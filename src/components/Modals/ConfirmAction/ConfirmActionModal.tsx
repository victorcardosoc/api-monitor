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
  ButtonsContainer
} from './ConfirmActionModal.styles'
import {useForm} from 'react-hook-form'
import { useState } from 'react'

interface FormDataType {
  hasConfirmed: boolean
}

interface ConfirmModalType {
  questionValues: {
    APINumber: string,
    APIClient: string
  },
  actionType: 'ban' | 'delete'
}

export function ConfirmActionModal({questionValues, actionType}: ConfirmModalType) {

  const{ register, handleSubmit, reset } = useForm<FormDataType>({
    defaultValues: {
      hasConfirmed: false
    }
  });
  
  const [dialogOpen, setDialogOpen] = useState(false)

  function updateMonitor(data: FormDataType){
  
    reset()
    setDialogOpen(false)
  }

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <ItemContainer>
        {actionType === 'delete' ? 
          <><Trash /><p>Excluir</p></> :
          <><Prohibit /><p>Banir</p></> 
        }
        </ItemContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
          {actionType === 'delete' ? 
          <><p>Excluir API</p></> :
          <><p>Banir API</p></> 
        }
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

        <DialogDescription>
          <InfoText>Número: {questionValues.APINumber}</InfoText>
          <InfoText>Cliente: {questionValues.APIClient}</InfoText>
        </DialogDescription>

          <form onSubmit={handleSubmit(updateMonitor)}>

            <ButtonsContainer>
            <CloseAndSaveDialog type='submit'>{actionType === 'delete' ? 
          'Excluir' :
          'Banir '
        }</CloseAndSaveDialog>
        <CloseAndSaveDialog type='submit'>Cancelar</CloseAndSaveDialog>
        </ButtonsContainer>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
