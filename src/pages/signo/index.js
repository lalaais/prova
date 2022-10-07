import {useEffect, useState } from "react";
import './index.scss'
import { useNavigate } from 'react-router-dom'

import React from "react";




export default function Signo() {
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [resul, setResul] = useState('');
    
    function libra() {
        if(dia >= 23 && mes === 'Setembro' ||  dia < 23 && mes === 'Outubro') {
            setResul('É do signo de Libra ? Sim');
        }else{
            setResul('É do signo de Libra ? Não');
        }
    }

    useEffect(()=>{
        libra();
    },[dia, mes]);
    
    const navigate = useNavigate('');
    
    return(
        <div className="main">
            <button onClick={() => navigate("/Home")}>Voltar</button>
            
            <h1> Qual o signo </h1>

            <label>Dia do mês</label>
            <input value={dia} onChange={(e) => setDia(Number(e.target.value))} type="text" />
            <label>Mês</label>
            <input value={mes} onChange={(e) => setMes(e.target.value)} type="text" />


            <h2>{resul}</h2>
        </div>
    )
}