import { GearSix, MagnifyingGlass, SunDim, MoonStars, Rows, Columns } from "phosphor-react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownContainer, DropdownItem, HeaderConfigIcon } from "./HeaderMenu.styles"
import { useContext } from "react"
import { ActualThemeContext } from "../../contexts/actualThemeContext"

export function HeaderMenuDialog(){

    const {actualTheme, changeTheme} = useContext(ActualThemeContext)

    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <HeaderConfigIcon>
                    <GearSix size={20} />
                </HeaderConfigIcon>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownContainer>
                    <DropdownItem><Columns /> <p>Visualização em Colunas</p></DropdownItem>
                    <DropdownItem><Rows/> <p>Visualização em Linhas</p></DropdownItem>
                    <DropdownItem><MagnifyingGlass /> <p>Filtrar Listas</p></DropdownItem>
                    <DropdownItem onClick={changeTheme}>
                        {actualTheme === 'light' ? <><MoonStars /><p>Modo Escuro</p></> : <><SunDim /><p>Modo Claro</p></>}
                        </DropdownItem>
                </DropdownContainer>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

