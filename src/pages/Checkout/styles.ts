import styled, { css } from 'styled-components'

interface ButtonMethodPaymentProps {
  isSelected?: boolean
}

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 0;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const SectionBase = styled.div`
  margin-top: 0.9375rem;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
  }
`

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 40.5625rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const Address = styled(CardBase)``
export const Payment = styled(CardBase)`
  margin-top: 0.75rem;
`

export const MethodPayment = styled.div`
  display: flex;
  gap: 0.75rem;

  width: 100%;
  height: 3.1875rem;
  margin-top: 2rem;
  flex-flow: row wrap;
`

export const ButtonMethodPayment = styled.button<ButtonMethodPaymentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  gap: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  background: ${(props) =>
    !props.isSelected
      ? props.theme['base-button']
      : props.theme['purple-light']};

  min-width: 11.125rem;
  flex-grow: 1;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};
  transition: 0.2s;

  svg {
    color: ${(props) => props.theme.purple};
    margin: 0;
    padding: 0;
  }

  ${(props) =>
    !props.isSelected &&
    css`
      :hover {
        background: ${(props) => props.theme['base-hover']};
        box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
      }
    `}
`
ButtonMethodPayment.defaultProps = {
  isSelected: false,
}

export const CartContainer = styled.div`
  width: 28rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem 2.25rem;
`
export const ListCoffeesInCart = styled.ul`
  list-style: none;
`

export const CoffeeCart = styled.li`
  display: grid;
  grid-template-columns: 4rem 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-template-areas:
    'img title  price'
    'img actions  price';

  width: 100%;
  height: 5rem;
  padding: 0.5rem 0.25rem;

  img {
    grid-area: img;
    width: 4.4rem;
  }
  h4 {
    grid-area: title;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    text-transform: capitalize;
    font-weight: 400;
  }
  strong {
    grid-area: price;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
  > div {
    grid-area: actions;
    height: 2rem;
    flex-wrap: wrap;
    display: flex;
    gap: 0.5rem;

    > button {
      border: none;
      border-radius: 6px;
      padding: 0 0.5rem;
      gap: 0.25rem;
      background: ${(props) => props.theme['base-button']};
      font-size: 0.75rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      text-transform: uppercase;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
      svg {
        color: ${(props) => props.theme.purple};
      }
      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  min-height: 1px;
  border: 1px solid ${(props) => props.theme['base-button']};

  margin: 1.5rem 0;
`
export const CardValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
    span {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }
    strong {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
    }
  }
  button {
    margin-top: 1.5rem;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    height: 2.875rem;
    border: none;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
