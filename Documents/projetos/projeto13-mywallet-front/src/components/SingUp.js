import { MainPage,Form } from "../theme/themes";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


export default function(){

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    console.log(name,email,password,confirmPassword);

    function postSingUp(e){
        e.preventDefault();
        if(password !== confirmPassword){
            alert("As senhas não coincidem");
            return;
        }
        const promisse = axios.post("http://localhost:5000/sing-up",{name,email,password});
        promisse.then(p => {console.log(p);navigate("/")});
        promisse.catch(p => {console.log(p);alert("preencha os dados corretamente")});
    }

    return(
        <MainPage>
            <h1>MyWallet</h1>
            <Form onSubmit={postSingUp}>
                <input type={"text"} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                <input type={"email"} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <input type={"password"} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                <input type={"password"} placeholder="Confirme a senha" onChange={e => setConfirmPassword(e.target.value)}></input>
                <button>Cadastrar</button>
            </Form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </MainPage>
    )
}