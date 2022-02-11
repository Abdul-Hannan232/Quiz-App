import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    body {
        background-color: lightblue;
        margin: 0;
        padding: 0;
        
        #root{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    text-align: center;
    .score {
        color: navy;
        font-weight: 1000
    }
    h1{
        font-weight: 1000
    }
    .green{
        color: green
    }
    .red{
        color: red
    }
    .start{
        border: 1px solid rgba(155,0,0,0.2);
        border-radius: 30%;
        padding: 5px 20px;
        background-color: rgb(242, 211, 0);
        margin: 0 auto;
        cursor: pointer
    }
    .next{
        border: 1px solid rgba(155,0,0,0.2);
        border-radius: 30%;
        padding: 5px 10px;
        background-color: rgb(242, 211, 0);
        margin: 0 auto;
        cursor: pointer
    }
`
// display: flex;
// justify-content: center;
// aling-items: center;
// text-align: center;