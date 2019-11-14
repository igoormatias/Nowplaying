import styled from 'styled-components'

export const Container = styled.header `
justify-content:center;
align-items: center;
text-align:center;
 padding: 10px 10px;
 color: #fff;
min-width: 1080px;
    

    h1 {
        font-size: 28px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 10px;

    }
    div {
        display:flex;
        justify-content:center;
        align-items:center ;
        
    li {
       align-items:center;
       justify-content:center;
        
        background: #1C1C1C;
        opacity:0.7;
        width: 290px;
        height:190px;
        border-radius: 5%;

        span {
            align-items:center;
            justify-content:center;
            display:flex;
        
      


        img{
            align-items:center;
            justify-content:center;
           display:flex;
           flex-direction:row;
            width: 120px;
            height:120px;
            border-radius: 50%;
        }
    }
    h3 {
        opacity:1;
        display:flex;
        flex-direction:row;
        color:#FFF;
        text-align:center;
        align-items:center;
        justify-content:center;
    }

    
    }
  
}

`;

export const Input = styled.input `
border:0;
flex:1;
align-items: center;
justify-content: center;
width:800px;
height:40px;
border-radius: 50px;
 text-align: center;
 

 
`

export const Button = styled.button `


border: 0;
width: 80px;
height: 40px;
font-size: 12px;
color: #FFFF;
border-radius: 10px;
background: #7159c1;
align-items: center;
justify-content:center;
font-weight: bold;
text-align:center;
padding: auto;
margin: 8px 8px;

&:hover {
    background:#7159d9;
}`