import * as Dialog from '@radix-ui/react-dialog'
import { PencilSimple, X } from 'phosphor-react'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
  CloseAndSaveDialog,
  ItemContainer,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
  Field,
  FieldContainer,
  FieldLabel,
} from './EditAPI.styles'
import { ActiveListContext } from '../../../contexts/activeListContext'
import { AlarmListContext } from '../../../contexts/alarmListContext'

interface ActiveType {
  activeItem?: {
    clientename: string
    clinica?: string
    id: number
    numero: string
    status_customer: boolean
  }
  alarmItem?: {
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
}

interface FormDataType {
  clientName: string
  number: string
}

export function EditModal({ activeItem, alarmItem, listType }: ActiveType) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      clientName: activeItem
        ? activeItem.clientename
        : alarmItem
          ? alarmItem.customer
          : '',
      number: activeItem
        ? activeItem.numero
        : alarmItem
          ? alarmItem.number
          : '',
    },
  })

  const { updateActive } = useContext(ActiveListContext)
  const { updateAlarm } = useContext(AlarmListContext)
  const [dialogOpen, setDialogOpen] = useState(false)

  function updateItem(data: FormDataType) {
    if (listType === 'actives' && activeItem) {
      activeItem.clientename = data.clientName
      activeItem.numero = data.number
      updateActive(activeItem)
    } else if (alarmItem) {
      alarmItem.customer = data.clientName
      alarmItem.number = data.number
      updateAlarm(alarmItem)
    }

    setDialogOpen(false)
  }

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <ItemContainer>
          <PencilSimple /> <p>Editar</p>
        </ItemContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            Editar API
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

          <form onSubmit={handleSubmit(updateItem)}>
            <FieldContainer>
              <FieldLabel>Cliente</FieldLabel>
              <Field type="text" id="clientName" {...register('clientName')} />
            </FieldContainer>

            <FieldContainer>
              <FieldLabel>Número</FieldLabel>
              <Field type="text" id="number" {...register('number')} />
            </FieldContainer>
            <CloseAndSaveDialog type="submit">Salvar</CloseAndSaveDialog>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
