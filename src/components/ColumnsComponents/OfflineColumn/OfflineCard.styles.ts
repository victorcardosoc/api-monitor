import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme['--light-yellow']};
  border: 2px solid ${(props) => props.theme['--light-yellow']};
  color: black;
  border-radius: 8px;
  margin-left: 1rem;
  margin-right: 1rem;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  p {
    line-height: 1.6;
  }
`
export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MonitorNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  & > svg {
    color: red;
    transition: 0.2s;
  }

  & > svg:hover {
    cursor: pointer;
    ${(props) => {
      return `color: ${props.theme['--light-red']}`
    }};
  }
`

export const MonitorDiv = styled.p`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.375rem;

  & > svg {
    color: #002500;
    transition: 0.2s;
  }

  & > svg:hover {
    cursor: pointer;
    ${(props) => {
      return `color: ${props.theme['--dark-green']}`
    }};
  }
`
