import {useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function FuncaoContar() {
    const [inicio, setInicio] = useState(0)
    const [fim, setFim] = useState(0)
    const [contador, setContador] = useState([])
    
    function Contar() {
        let array = [];
        for(let i = inicio; i <= fim; i++) {
            array.push(i)
        }
        setContador(array);

    }
    const navigate = useNavigate('');

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
            
            <h1> Contador</h1>

            <p>Início</p>

            <input value={inicio} onChange={(e)=> setInicio(Number(e.target.value))} type="number" />
            <p>Fim</p>
            <input value={fim} onChange={(e)=> setFim(Number(e.target.value))} type="number" />

            <button onClick={()=> Contar()}> Contar </button>
            
            {contador.map(item => <h2>{ item }</h2>)}
        
        </main>
    )
}