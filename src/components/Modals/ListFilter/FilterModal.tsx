import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlass, X } from 'phosphor-react'
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
  FieldContainer,
  FieldLabel,
  Field,
  CloseAndSaveDialog,
  ItemContainer,
} from './FilterModal.styles'
import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import { ActiveListContext } from '../../../contexts/activeListContext'
import { AlarmListContext } from '../../../contexts/alarmListContext'

interface FormDataType {
  filterValue: string
}

export function FilterModal() {
  const { register, handleSubmit, reset } = useForm<FormDataType>({
    defaultValues: {
      filterValue: '',
    },
  })

  const [dialogOpen, setDialogOpen] = useState(false)
  const { filterActiveList } = useContext(ActiveListContext)
  const { filterAlarmList } = useContext(AlarmListContext)

  function filterList(data: FormDataType) {
    filterAlarmList(data.filterValue)
    filterActiveList(data.filterValue)
    reset()
    setDialogOpen(false)
  }

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <ItemContainer>
          <MagnifyingGlass /> <p>Filtrar Listas</p>
        </ItemContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            Filtrar Listas
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

          <form onSubmit={handleSubmit(filterList)}>
            <FieldContainer>
              <FieldLabel>Buscar por</FieldLabel>
              <Field
                type="search"
                id="filterValue"
                {...register('filterValue')}
              />
            </FieldContainer>

            <CloseAndSaveDialog type="submit">Salvar</CloseAndSaveDialog>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
