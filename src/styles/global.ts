import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}
button {
  cursor: pointer;
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']}
}







`
