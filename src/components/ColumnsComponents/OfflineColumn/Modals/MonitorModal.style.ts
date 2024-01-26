import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  background: #29292999;
  position: fixed;
  inset: 0;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme['--secondary-background']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  min-width: 250px;
  padding: 1rem;

  border-radius: 8px;
  border: 1px solid grey;
`

export const DialogTitle = styled(Dialog.Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
`

export const DialogClose = styled(Dialog.Close)`
  &:hover {
    cursor: pointer;
    color: grey;
  }
`

export const CloseAndSaveDialog = styled(Dialog.Close)`
  margin-top: 1.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['--text-color']};
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  color: ${(props) => props.theme['--text-color']};
  transition: 0.2s;

  &:hover {
    border: 1px solid transparent;
    background: grey;
    color: ${(props) => props.theme['--text-color']};
    cursor: pointer;
  }
`

export const FieldContainer = styled.fieldset`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
  border: none;
`

export const FieldLabel = styled.label`
  font-size: 1rem;
`

export const Field = styled.input`
  width: 100%;
  border: 1px solid grey;
  background: transparent;
  padding: 0.125rem;
  border-radius: 4px;
  color: ${(props) => props.theme['--text-color']};
  font-size: 0.875rem;

  &::-webkit-search-cancel-button {
    display: none;
  }
`
