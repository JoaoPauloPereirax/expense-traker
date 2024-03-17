import styled from "styled-components";





//Cada uma destas funções funcionam como se fossem uma classe

export const Container = styled.div`

`;

export const Header = styled.div`
       background-color: darkblue;
       height: 150px;
       text-align: center;
`;

export const HeaderText = styled.div`
       margin: 0;
       padding: 0;
       color: #fff;//tenho qua aprender a colocar a cor em uma variável
       padding-top: 30px;//Para afastar o título da borda de cima
`;


export const Body = styled.div`

       margin: auto;
       max-width: 980px;
       margin-bottom: 30px;//Para dar um respiro logo a baixo
`;