import * as Dialog from "@radix-ui/react-dialog";
import { PlusCircle, X } from "phosphor-react";
import {
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogClose,
  FieldContainer,
  FieldLabel,
  Field,
  CloseAndSaveDialog,
} from "./MonitorModal.styles";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormDataType {
  monitorName: string;
}

interface OfflineType {
  offlineItem: {
    status: string;
    chatId: string;
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
  updateItem: (item: OfflineType) => void;
}

export function MonitorModal({ offlineItem, updateItem }: OfflineType) {
  const { register, handleSubmit, reset } = useForm<FormDataType>({
    defaultValues: {
      monitorName: "",
    },
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  function updateMonitor(data: FormDataType) {
    offlineItem.monitorado = data.monitorName;
    updateItem({
      offlineItem,
      updateItem,
    });
    reset();
    setDialogOpen(false);
  }

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <PlusCircle size={20} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>
            Inserir Monitor{" "}
            <DialogClose asChild>
              <X size={18} />
            </DialogClose>
          </DialogTitle>

          <form onSubmit={handleSubmit(updateMonitor)}>
            <FieldContainer>
              <FieldLabel>Nome</FieldLabel>
              <Field
                type="search"
                id="monitorName"
                {...register("monitorName")}
              />
            </FieldContainer>

            <CloseAndSaveDialog type="submit">Salvar</CloseAndSaveDialog>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
