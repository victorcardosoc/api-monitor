import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const HeaderConfigIcon = styled.i`
  border-radius: 4px;
  color: ${(props) => props.theme['text-color']};
  transition: 0.2s;
  height: 20px;
  width: 20px;
  margin-right: 0.2rem;

  &:hover {
    background-color: ${(props) => props.theme['--main-background']};
    cursor: pointer;
  }
`

export const DropdownContainer = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme['--secondary-background']};
  margin: 0.688rem 1rem;
  border-radius: 8px;
  border: 1px solid grey;
`

export const DropdownItem = styled(DropdownMenu.Item)`
  padding: 0.625rem;
  display: flex;
  align-items: center;

  p {
    margin-left: 0.625rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:not(:first-child) {
    border-top: 1px solid grey;
  }
`
export const DropdownItemDialog = styled.div`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  width: 100%;

  p {
    margin-left: 0.625rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:not(:first-child) {
    border-top: 1px solid grey;
  }
`
