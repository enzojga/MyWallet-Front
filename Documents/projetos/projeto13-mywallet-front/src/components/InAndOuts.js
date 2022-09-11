import { MainPage } from "../theme/themes";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import styled from 'styled-components';

export default function InAndOuts(){

    const navigate = useNavigate();

    return(
        <MainPage>
            <Header>
                <h2>Olá, Fulano</h2>
                <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
            </Header>
            <Historic>
                <p>Não há registros de entrada ou saída</p>
            </Historic>
            <Buttons>
                <Interaction onClick={() => navigate("/WalletActions",{state:2})}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </Interaction>
                <Interaction onClick={() => navigate("/WalletActions",{state:1})}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saida</p>
                </Interaction>
            </Buttons>
        </MainPage>
    )
}

const Header = styled.div`
    display: flex;
    width: 326px;
    justify-content: space-between;
    color: white;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 22px;
    ion-icon{
        font-size: 30px;

    }
`

const Historic = styled.div`
    width: 326px;
    height: 446px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    p{
        font-size: 20px;
        color: #868686;
        width: 180px;
        height: 46px;
    }
`
const Buttons = styled.div`
    display: flex;
    width: 326px;
    justify-content: space-between;
    margin-top: 13px;
`

const Interaction = styled.div`
    width: 155px;
    height: 114px;
    border-radius: 5px;
    background-color: #A328D6;
    color: white;
    display: flex;
    flex-direction: column;
    p{
        font-weight: 700;
        font-size: 17px;
        margin-left: 10px;
    }
    ion-icon{
        font-size: 25px;
        margin: 10px 0 0 10px;
    }
`

