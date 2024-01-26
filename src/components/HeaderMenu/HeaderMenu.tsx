import {
  GearSix,
  MagnifyingGlass,
  SunDim,
  MoonStars,
  Rows,
  Columns,
} from 'phosphor-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  DropdownContainer,
  DropdownItem,
  HeaderConfigIcon,
} from './HeaderMenu.styles'
import { useContext } from 'react'
import { ActualThemeContext } from '../../contexts/actualThemeContext'
import { ActualShowModeContext } from '../../contexts/showListModeContext'

export function HeaderMenuDialog() {
  const { actualTheme, changeTheme } = useContext(ActualThemeContext)
  const { actualShowMode, changeMode } = useContext(ActualShowModeContext)

  function returnThemeModeItem() {
    if (actualTheme === 'light') {
      return (
        <>
          <MoonStars />
          <p>Modo Escuro</p>
        </>
      )
    } else {
      return (
        <>
          <SunDim />
          <p>Modo Claro</p>
        </>
      )
    }
  }

  function returnViewTypeItem() {
    if (actualShowMode === 'row') {
      return (
        <>
          <Columns /> <p>Visualização em Colunas</p>
        </>
      )
    } else {
      return (
        <>
          <Rows /> <p>Visualização em Linhas</p>
        </>
      )
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <HeaderConfigIcon>
          <GearSix size={20} />
        </HeaderConfigIcon>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownContainer>
          <DropdownItem onClick={changeMode}>
            {returnViewTypeItem()}
          </DropdownItem>
          <DropdownItem>
            <MagnifyingGlass /> <p>Filtrar Listas</p>
          </DropdownItem>
          <DropdownItem onClick={changeTheme}>
            {returnThemeModeItem()}
          </DropdownItem>
        </DropdownContainer>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
