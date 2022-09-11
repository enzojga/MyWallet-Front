import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MainPage,Form } from "../theme/themes";

export default function WalletActions(){

    const location = useLocation();
    console.log(location);
    const type = location.state;
    const [value,setValue] = useState("");
    const [description,setDescription] = useState("");

    console.log(description,value)
    function creatEntry(e){
        e.preventDefault();
    }

    return(
        <MainPage>
            <EntryPage>
                <h1>{type === 2 ? "Nova entrada" : "Nova saída"}</h1>
                <Form onSubmit={creatEntry}>
                    <input placeholder="Valor" type={"number"} value={value} onChange={e => setValue(e.target.value)} />
                    <input placeholder="Descrição" type={"text"} value={description} onChange={e => setDescription(e.target.value)}/>
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