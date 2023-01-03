import styled from 'styled-components'

interface CountCoffeesInCart {
  total: number
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  height: 7.5rem;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  gap: 0.25rem;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled.button<CountCoffeesInCart>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 8px;
  border: 0;
  border-radius: 8px;

  position: relative;

  &::after {
    content: '${(props) => props.total}';
    position: absolute;
    min-width: 1.2rem;
    min-height: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;

    top: -8px;
    right: -8px;
    z-index: 10;

    font-size: 0.75rem;
    font-weight: 700;
  }
`
