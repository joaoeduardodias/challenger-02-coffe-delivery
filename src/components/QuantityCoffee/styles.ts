import styled from 'styled-components'

export const QuantityCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.5rem;
  min-width: 72px;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.purple};
    transition: 0.2s;
    height: 100%;
    background: transparent;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
