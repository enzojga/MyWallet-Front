import SingIn from "./SingIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./SingUp";
import InAndOuts from "./InAndOuts";
import WalletActions from "./WalletActions";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn/>}/>
                <Route path="/sing-up" element={<SingUp/>}/>
                <Route path="/historic" element={<InAndOuts/>}/>
                <Route path="/WalletActions" element={<WalletActions/>}/>
            </Routes>
        </BrowserRouter>
    )
}

