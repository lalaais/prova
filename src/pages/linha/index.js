import { useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function TamanhoLinha(){
    const [qtd, setQtd] = useState([])
    const [resul, setResul] = useState([])

    function linha (){
        let array = [];
        for( let i = 0; i <= qtd; i++){
            array.push(i)
        }
        setResul(array);
    }

    const navigate = useNavigate('');

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
        
        <h1> Tamanho da Linha</h1>

        <p>Coloque o tamanho da linha</p>

        <input value={qtd} onChange={(e)=> setQtd(Number(e.target.value))} type="number" />

        <button onClick={()=> linha()}> Fazer Linha </button>
        
        {resul.map(item => <h2 className="results">{ item }</h2>)}
    </main>

    )
}