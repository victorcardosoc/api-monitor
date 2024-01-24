import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['--secondary-background']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  font-size: 1.625rem;
  color: ${(props) => props.theme['--text-color']};
`

export const HeaderConfigIcon = styled.i`
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

export const FunctionsContainer = styled.div`
  display: flex;
  gap: 1.5625rem;
  align-items: center;
`

export const UpdateAllContainer = styled.div`
  display: flex;
  border: 1px solid #8a8a8a;
  border-radius: 8px;
`

export const TimerDiv = styled.p`
  padding: 0.2rem 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-top: auto;
`

export const UpdateIcon = styled.div`
  padding: 0.2rem 1rem;
  outline: 1px solid #b8b8b8;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    outline: 1px solid b8b8b8;
    background: #b8b8b8;
    color: black;
  }

  > svg {
    transition: transform 1s;
  }

  &:hover > svg {
    transform: rotate(360deg);
  }
`
