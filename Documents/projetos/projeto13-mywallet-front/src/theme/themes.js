import styled from 'styled-components';

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    h1{
        font-size: 32px;
        color: white;
        margin-bottom: 24px;
        font-family: 'Saira Stencil One';
    }
    p{
        margin-top: 36px;
        color: white;
        font-weight: 700;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        border: none;
        margin-bottom: 13px;
        ::placeholder{
            font-size: 20px;
            color: black;
            padding-left: 15px;
        }
    }
    button{
        width: 326px;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 20px;
        font-family: 'Raleway';
        font-weight: 700;
    }
`
export { MainPage, Form }