import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle, X } from 'phosphor-react'
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
  FieldContainer,
  FieldLabel,
  Field,
  CloseAndSaveDialog,
} from './MonitorModal.style'

export function MonitorModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <PlusCircle size={20} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            Inserir Monitor{' '}
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

          <form>
            <FieldContainer>
              <FieldLabel>Nome</FieldLabel>
              <Field type="search" id="monitorName" name="monitorName" />
            </FieldContainer>
            <CloseAndSaveDialog>Salvar</CloseAndSaveDialog>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
