import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        *::-webkit-scrollbar {
            width: 4px;
            border-radius: 8px;
        }

        *::-webkit-scrollbar-track {
            background-color: grey;
            border-radius: 8px;

        }

        *::-webkit-scrollbar-thumb {
            background-color:  black;
            border-radius: 8px;
        }
  }

    body {
        background: ${(props) => props.theme['--main-background']};
        color: ${(props) => props.theme['--text-color']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }
`
