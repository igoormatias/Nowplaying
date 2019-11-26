import { createGlobalStyle } from 'styled-components';

import background from '../Assets/Images/background.jpg';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:0;
}

html, body , #root {
    min-height: 100%;
}



body {
    background: #191920   url(${background}) no-repeat center top;
    -webkit-font-smothing: antialiased;
} 


body ,input , button {
    font: 14px Roboto, sans-serif;
   
}



button {
    cursor: pointer;
}
`;
