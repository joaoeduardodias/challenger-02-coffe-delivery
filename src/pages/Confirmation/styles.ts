import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 1120px;
  margin: 5rem auto 0;

  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  width: 100%;
  max-width: 526px;
  align-items: flex-start;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
export const InfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  address,
  p {
    font-size: 1rem;
    font-style: normal;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const Icon = styled.div`
  border-radius: 50%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
`
export const IconMap = styled(Icon)`
  background: ${({ theme }) => theme.purple};
`
export const IconClock = styled(Icon)`
  background: ${({ theme }) => theme.yellow};
`
export const IconMoney = styled(Icon)`
  background: ${({ theme }) => theme['yellow-dark']};
`
