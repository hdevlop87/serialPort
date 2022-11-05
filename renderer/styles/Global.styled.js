import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@600;700&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        
    };
    html { 
        height: 100%; 
    };
    body {
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Roboto Slab', serif;
        overflow: hidden;
        min-height: 100vh;
        background-color: #f2f2f2;
    }

    #__next{
        height: 100vh;
        width: 100vw;
    }
`;