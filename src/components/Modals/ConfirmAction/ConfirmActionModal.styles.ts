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
  min-width: 30px;
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

export const CloseAndSaveDialog = styled.button`
  margin-top: 1rem;
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

export const ItemContainer = styled.div`
  display: flex;
  padding: 0.625rem;
  width: 100%;
  align-items: center;

  p {
    margin-top: 0.125rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`

export const DialogDescription = styled(Dialog.Description)`
  margin-top: 1rem;
`

export const InfoText = styled.p`
  &:not(:first-child) {
    margin-top: 0.5rem;
  }
`
