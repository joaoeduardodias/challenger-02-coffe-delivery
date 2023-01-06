import styled from 'styled-components'

export const FormAddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;

  > div {
    width: 100%;
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseInput = styled.input`
  width: 100%;
  height: 2.625rem;
  padding: 12px;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
export const NormalInput = styled(BaseInput)`
  width: 12.5rem;
`
export const SmallInput = styled(BaseInput)`
  width: 3.75rem;
`
export const InputOptional = styled.div`
  width: 100%;
  position: relative;
`
export const TagOptional = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};

  position: absolute;
  right: 1rem;
  top: 13.2px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3;
  position: relative;
  > p {
    color: ${({ theme }) => theme['base-error']};
  }
`
