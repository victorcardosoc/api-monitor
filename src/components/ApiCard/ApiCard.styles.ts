import styled from 'styled-components'

interface CardStatusProps {
  variant: 'active' | 'out' | 'banned'
}

const backgroundVariants = {
  active: 'purple',
  out: '#fff',
  banned: 'red',
}

const borderVariants = {
  active: 'purple',
  out: 'orange',
  banned: 'red',
}

export const CardContainer = styled.div<CardStatusProps>`
  padding: 1rem;
  border: 1px solid red;
  border-radius: 8px;
  margin-top: 1.25rem;
  margin-left: 1rem;
  margin-right: 1rem;

  ${(props) => {
    return `background-color: ${backgroundVariants[props.variant]}, border: 1px solid ${borderVariants[props.variant]};`
  }}

  p {
    line-height: 1.6;
  }
`
