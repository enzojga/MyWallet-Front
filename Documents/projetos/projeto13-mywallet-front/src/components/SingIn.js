import { MainPage, Form } from "../theme/themes";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function SingIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    function sendLogin(e) {
        e.preventDefault();

        const promisse = axios.post("http://localhost:5000/sing-in", { email, password });
        promisse.then(p => { localStorage.setItem('token',JSON.stringify(p.data)); navigate("/historic")});
        promisse.catch(p => { console.log(p); alert("preencha os dados corretamente") });

    }

    return (
        <MainPage>
            <h1>MyWallet</h1>
            <Form onSubmit={sendLogin}>
                <input placeholder="E-mail" type={"email"} onChange={e => setEmail(e.target.value)}></input>
                <input placeholder="Senha" type={"password"} onChange={e => setPassword(e.target.value)}></input>
                <button>Entrar</button>
            </Form>
            <Link to="/sing-up">Primeira vez? Cadastre-se!</Link>
        </MainPage>
    )
}