import { MainPage,Form } from "../theme/themes"
import { useState } from "react"

export default function SingIn(){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    console.log(email,senha);
    function sendLogin(e){
        e.preventDefault();
    }

    return(
        <MainPage>
            <h1>MyWallet</h1>
            <Form onSubmit={sendLogin}>
                <input placeholder="E-mail" type={"email"} onChange={e=> setEmail(e.target.value)}></input>
                <input placeholder="Senha" type={"password"} onChange={e => setSenha(e.target.value)}></input>
                <button>Entrar</button>
            </Form>
            <p>Primeira vez? Cadastre-se!</p>
        </MainPage>
    )
}