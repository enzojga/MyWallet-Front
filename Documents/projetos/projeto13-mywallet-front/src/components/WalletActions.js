import styled from "styled-components";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import { MainPage,Form } from "../theme/themes";
import axios from "axios";
import {getConfig}  from './data';

export default function WalletActions(){

    const location = useLocation();
    const navigate = useNavigate();
    const type = location.state;
    const [value,setValue] = useState("");
    const [description,setDescription] = useState("");

    console.log(description,value)
    function creatEntry(e){
        e.preventDefault();

        const axiosType = type === 2 ? "deposit" : "withdraw"
        const config = getConfig();
        const promisse = axios.post("http://localhost:5000/moviments",{value,type:axiosType,description},config);
        promisse.then(p => {console.log(p);navigate("/historic")});
        promisse.catch(p => {console.log(p);alert("preencha os dados corretamente")});

    }

    return(
        <MainPage>
            <EntryPage>
                <h1>{type === 2 ? "Nova entrada" : "Nova saída"}</h1>
                <Form onSubmit={creatEntry}>
                    <input placeholder="Valor" type={"number"} required value={value} onChange={e => setValue(e.target.value)} />
                    <input placeholder="Descrição" type={"text"} required value={description} onChange={e => setDescription(e.target.value)}/>
                    <button>Salvar {type === 2 ? "entrada" : "saída"}</button>
                </Form>
            </EntryPage>
        </MainPage>
    )
}

const EntryPage = styled.div`
    width: 100%;
    height: 100%;
    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 26px;
        margin: 24px 0 40px 25px;
    }
`