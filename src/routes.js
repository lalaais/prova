import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from "./pages/acai";
import Signo from "./pages/signo";
import Sorveteria from "./pages/sorveteria";
import Home from "./pages/home";

export default function Path() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/acai" element={<Acai/>}/>
                <Route exact path="/signo" element={<Signo/>}/>
                <Route exact path="/sorveteria" element={<Sorveteria/>}/>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}