import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const DropdownIcon = styled.i`
  border-radius: 4px;
  color: ${(props) => props.theme['--text-color']};
  transition: 0.2s;
  height: 20px;
  width: 20px;
  margin-right: 0.2rem;

  &:hover {
    cursor: pointer;
    color: grey;
  }
`

export const DropdownBlackIcon = styled.i`
  border-radius: 4px;
  color: ${(props) => props.theme['--text-fake-black']};
  transition: 0.2s;
  height: 20px;
  width: 20px;
  margin-right: 0.2rem;

  &:hover {
    cursor: pointer;
    color: grey;
  }
`

export const DropdownContainer = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme['--secondary-background']};
  margin-top: 0.25rem;
  border-radius: 8px;
  border: 1px solid grey;
`

export const DropdownItem = styled.div`
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
