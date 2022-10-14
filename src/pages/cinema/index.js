import { useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function Cinema () {
    const [qtdinteira, setQtdInteira] = useState(0);
    const [qtdmeia, setQtdMeia] = useState(0);
    const [dia, setDia] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resul, setResul] = useState(0);

    function totalCompra() {
        if(nacional === true){
            setResul((qtdinteira + qtdmeia ) * 5);
        } else if(dia === 'quarta-feira'){
            setResul((qtdinteira + qtdmeia) * (28.5 / 2));
        } else{
            setResul((qtdinteira * 28.5 ) + (qtdmeia * 28.5 / 2));
        }

    }

    const navigate = useNavigate('');

    return(
        <main className="inicial">
           <button onClick={() => navigate("/home")}>Voltar</button>

            <h1> Ingresso de Cinema </h1>

            <p>O filme é nacional?</p>
            <input  value={nacional} onChange={(e)=> setNacional(e.target.checked)} type="checkbox" />

            <p>Qual dia da Semana</p>
            <input  value={dia} onChange={(e)=> setDia(e.target.value)} type="text" />
            <p>Quantidade de Inteira</p>
            <input  value={qtdinteira} onChange={(e)=> setQtdInteira(Number(e.target.value))} type="number" />
            <p>Quantidade de Meias</p>
            <input  value={qtdmeia} onChange={(e)=> setQtdMeia(Number(e.target.value))} type="number" />

            <button onClick={()=> totalCompra()}> Calcular </button>
                      
            <h6>{resul}</h6> 

        </main>
    )
}