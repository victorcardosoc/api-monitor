import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
`

export const Column = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`
