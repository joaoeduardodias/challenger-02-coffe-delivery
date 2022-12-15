import styled from 'styled-components'

export const ListCoffeesContainer = styled.section`
  padding-top: 2rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  row-gap: calc(1.25rem + 1.6rem);
`
