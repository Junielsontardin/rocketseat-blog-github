import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        &:focus-visible {
            outline: ${(props) => props.theme['blue-500']} auto 1px;    
        }
    }
    
    button {
        background: transparent;
        outline: none;
        border: none;
    }
    
    body {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: ${(props) => props.theme['line-height-default']};
        background-color: ${(props) => props.theme['black-500']};
    }

    a {
        text-decoration: none;
    }
`
