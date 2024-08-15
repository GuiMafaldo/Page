import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
        body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`