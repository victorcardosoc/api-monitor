import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 959px) {
    flex-wrap: wrap;
  }
`

export const Column = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
`

export const CardListColumn = styled.div`
  height: calc(100vh - 9.2rem);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`
