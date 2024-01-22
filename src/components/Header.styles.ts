import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['--secondary-background']};
  padding: 1rem;
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  font-size: 1.625rem;
  color: ${(props) => props.theme['--text-color']};
`

export const HeaderConfigIcon = styled.i`
  margin-left: auto;
  border-radius: 4px;
  color: ${(props) => props.theme['text-color']};
  transition: 0.2s;
  height: 20px;
  width: 20px;

  &:hover {
    background-color: ${(props) => props.theme['--main-background']};
    cursor: pointer;
  }
`
