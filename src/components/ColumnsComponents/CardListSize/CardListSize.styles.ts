import styled from 'styled-components'

interface statusProps {
  status: 'offline' | 'active' | 'banned'
}

const statusStyle = {
  offline: '#FFDC00',
  active: '#00D015',
  banned: '#D64949',
}

export const CardContainer = styled.div<statusProps>`
  padding: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;

  ${(props) => {
    return `border:  2px solid  ${statusStyle[props.status]}`
  }};

  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoText = styled.p`
  font-size: 1.5rem;
`
