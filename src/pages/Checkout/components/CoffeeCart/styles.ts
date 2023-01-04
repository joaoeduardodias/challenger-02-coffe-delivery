import styled from 'styled-components'

export const CoffeeCartContainer = styled.li`
  width: 100%;
`

export const CoffeeCartContent = styled.div`
  display: grid;
  grid-template-columns: 4rem 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-template-areas:
    'img title  price'
    'img actions  price';

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
