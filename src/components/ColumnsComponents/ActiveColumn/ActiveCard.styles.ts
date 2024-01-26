import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1rem;
  border: 2px solid ${(props) => props.theme['--dark-green']};
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
