import {useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function Juros() {
    const [taxa, setTaxa] = useState(0)
    const [periodo, setPeriodo] = useState(0)
    const [juros, setJuros] = useState(0)
    const [empreendimento, setEmpreendimento] = useState(0)
    const [parcela, setParcela] = useState(0)
    const [resul, setResul] = useState(0)

    function JurosCompostos(){
        let valorFinal = empreendimento * ((1 + (taxa/100)) ** periodo)
        let ValorParcela = valorFinal / (periodo * 12); 
        let valorJuros = valorFinal - empreendimento
        setResul(valorFinal.toFixed(2));
        setJuros(valorJuros.toFixed(2));
        setParcela(ValorParcela.toFixed(2));
    }

    const navigate = useNavigate('');

    console.log(resul);
    console.log(juros);

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
            
            <h1> Juros Compostos</h1>

            <p>Valor do empreendimento</p>
            <input value={empreendimento} onChange={(e)=> setEmpreendimento(Number(e.target.value))} type="number" />
            <p>Taxa anual</p>
            <input value={taxa} onChange={(e)=> setTaxa(Number(e.target.value))} type="number" />
            <p>Tempo em anos</p>
            <input value={periodo} onChange={(e)=> setPeriodo(Number(e.target.value))} type="number" />

        
            <button className="juros" onClick={()=> JurosCompostos()}> Gerar Juros </button>

            <h3>Valor Final: R${resul}</h3>
            <h3>Valor Juros: R${juros}</h3>
            <h3>Valor Parcela: R${parcela}</h3>
        </main>
    )
}