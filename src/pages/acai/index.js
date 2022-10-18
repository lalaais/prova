import {useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function Acai() {
    const [qtdPequena, setQtdPequena] = useState(0)
    const [qtdMedia, setQtdMedia] = useState(0)
    const [qtdGrande, setQtdGrande] = useState(0)

    const [desc, setDesc] = useState(0)
    const [resul, setResul] = useState(0)

    function Calcular(){
        let calculo = qtdPequena * 13.50 + qtdMedia * 15.00 + qtdGrande * 17.00;  
        let desconto = calculo * desc / 100;
        let total = desconto - resul;

        setResul(total);
        
    }

    const navigate = useNavigate('');

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
            
            <h1> Açai</h1>

            <p>qtdPequena</p>
            <input value={qtdPequena} onChange={(e)=> setQtdPequena(Number(e.target.value))} type="number" />
            <p>qtdMedia</p>
            <input value={qtdMedia} onChange={(e)=> setQtdMedia(Number(e.target.value))} type="number" />
            <p>qtdGrande</p>
            <input value={qtdGrande} onChange={(e)=> setQtdGrande(Number(e.target.value))} type="number" />
            <p>Desconto</p>
            <input value={desc} onChange={(e)=> setDesc(Number(e.target.value))} type="number" />
            

            <button onClick={()=> Calcular()}> Calcular </button>

            <h3>{resul}</h3>
        </main>
    )



}


