import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['base-hover']};
}

body{
  background: ${props => props.theme['background']};
  color: ${props => props.theme['base-title']};
  -webkit-font-smoothing: antialiased;
  max-width: 1120px;
  margin: 0 auto;
  padding-bottom: 400px;
}

body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  outline: none;
  border: none;
}

h1, h2, h3 {
  font-family: 'Baloo 2', serif;
  color: ${props=>props.theme["base-title"]};
}

h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${props=>props.theme["base-subtitle"]};
}
`