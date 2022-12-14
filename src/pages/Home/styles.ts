import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const HeroContainer = styled.section`
  padding-top: 5.875rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
    line-height: 62.4px;
    font-family: 'Baloo 2', sans-serif;
    width: 36.75rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    width: 36.75rem;
    margin-top: 1rem;
  }
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const ItemsContainer = styled.div`
  margin-top: 66px;
  display: grid;
  justify-content: initial;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  max-width: 36.75rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`
const BACKGROUND_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-title',
  purple: 'purple',
} as const

interface IconProps {
  backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const Icon = styled.div<IconProps>`
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  background-color: ${(props) =>
    props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
`
