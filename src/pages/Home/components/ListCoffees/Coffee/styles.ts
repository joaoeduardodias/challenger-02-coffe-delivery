import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  min-height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
  width: 100%;
`

export const Tag = styled.span`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const Title = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`
export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
  div {
    display: flex;
    height: 100%;
    gap: 0.5rem;
  }
`

export const AddCoffeeToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.white};
  }
`
