import { MainPage } from "../theme/themes";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import { getConfig } from './data';
import Moviment from "./Moviment";
import axios from "axios";


export default function InAndOuts() {

    const [transactions, setTransactions] = useState([]);
    const [userData, setUserData] = useState({});
    let acumulador = 0;

    useEffect(() => {

        console.log("Entrando no useEffect");
        const config = getConfig();

        const promisseUser = axios.get("http://localhost:5000/users", config);
        promisseUser.then(p => setUserData(p.data));
        promisseUser.catch(p => console.log(p));

        const promisse = axios.get("http://localhost:5000/moviments", config);
        promisse.then(p => { setTransactions(p.data); console.log(p)});
        promisse.catch(p => console.log(p));

    }, []);

    transactions.forEach(t => {if(t.type === "deposit"){
                                acumulador += Number(t.value)
                                } else {
                                    acumulador -= Number(t.value)
                                }});
    console.log(transactions, userData,acumulador);
    const navigate = useNavigate();

    return (
        <MainPage>
            <Header>
                <h2>Olá, {userData.name}</h2>
                <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
            </Header>
            <Historic>
                {transactions.length === 0 ?
                    <p>Não há registros de entrada ou saída</p> :
                    <ul>{transactions.map(m => <Moviment date={m.date} description={m.description} type={m.type} value={m.value} />)}
                        <Total number={acumulador}><strong>SALDO</strong> <p>{acumulador}</p></Total>
                    </ul>
                }
            </Historic>
            <Buttons>
                <Interaction onClick={() => navigate("/WalletActions", { state: 2 })}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </Interaction>
                <Interaction onClick={() => navigate("/WalletActions", { state: 1 })}>
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
    position: relative;
    overflow-x:hidden;
    & > p{
        font-size: 20px;
        color: #868686;
        width: 180px;
        height: 46px;
        align-self: center;
        justify-self: center;
        text-align: center;
    }
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    li{
        width: 100%;
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

const Total = styled.span`
    width: calc(100% - 30px);
    position: absolute;
    bottom: 0;
    justify-self: flex-end;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    margin: 0 12px 0 20px;
    strong{
        font-weight: 700;
    }
    p{
        justify-self: end;
        color: ${props => props.number > 0 ? "#03AC00" : "#C70000"};
    }
`