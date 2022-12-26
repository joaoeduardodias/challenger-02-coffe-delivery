import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    margin-left: 0.9rem;
    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
