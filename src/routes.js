import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from "./pages/acai";
import Signo from "./pages/signo";
import Sorveteria from "./pages/sorveteria";
import Home from "./pages/home";
import Salario from "./pages/salario";
import Viagem from "./pages/viagem";
import Febre from "./pages/febre";
import SitOrcamento from "./pages/orcamento";
import Cinema from "./pages/cinema";

export default function Path() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/acai" element={<Acai/>}/>
                <Route exact path="/signo" element={<Signo/>}/>
                <Route exact path="/sorveteria" element={<Sorveteria/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/salario" element={<Salario/>}/>
                <Route exact path="/viagem" element={<Viagem/>}/>
                <Route exact path="/febre" element={<Febre/>}/>
                <Route exact path="/orcamento" element={<SitOrcamento/>}/>
                <Route exact path="/cinema" element={<Cinema/>}/>
            </Routes>
        </BrowserRouter>
    )
}