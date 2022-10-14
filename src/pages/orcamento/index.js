import { useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function SitOrcamento() {
    const[ganhos, setGanhos] = useState(0)
    const[gastos, setGastos] = useState(0)
    const [msg, seMsg] = useState('');
    
    function Orcamento(){
        if (gastos > ganhos) {
            seMsg('Orçamento comprometido! Hora de rever seus gastos!');
        } else if (gastos > (ganhos * 81 / 100) && gastos < ganhos) {
            seMsg('Cuidado, seu orçamento pode ficar comprometido!');
        } else if (gastos > (ganhos * 51 / 100) && gastos < (ganhos * 80 / 100)) {
            seMsg('Atenção, melhor conter os gastos!');
        } else if (gastos > (ganhos * 21 / 100) && gastos < (ganhos * 50 / 100)) {
            seMsg('Muito bem, seus gastos não ultrapassam metade dos ganhos!');
        } else if(gastos > (ganhos * 0 / 100) && gastos < (ganhos * 20 / 100)) {
            seMsg('Parabéns, está gerenciando bem seu orçamento!');
        }
    }

    const navigate = useNavigate('');

    return(
        <main className="primeira">
           <button onClick={() => navigate("/home")}>Voltar</button>

           <h1> Orçamento </h1>

            <p>Ganhos</p>
            <input value={ganhos} onChange={(e)=> setGanhos(Number(e.target.value))} type="number" />
            <p>Gastos</p>
            <input value={gastos} onChange={(e)=> setGastos(Number(e.target.value))} type="number" />

            
            <button onClick={()=> Orcamento()}> Ver situação do Orçamento </button>
            <h6>{msg}</h6>            

        </main>
    )

}