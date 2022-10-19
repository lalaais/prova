import {    useState    } from "react";
import './index.scss'

import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Quadrado(){
    const [base, setBase] = useState([])
    const [altura, setAltura] = useState([])
    const [resul, setResul] = useState([])

    function Quadradinho(){
        var matriz = [];
        
        for(let i = 1; i <= base; i++){
            for(let tamanho = 1; tamanho <= altura; tamanho++){
                document.write(matriz [base][altura]+'*')
            }
        }
        setResul(matriz);
    }


    const navigate = useNavigate('');

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
        
        <h1> Forma de Quadrado </h1>

        <p>Coloque o tamanho da base</p>

        <input value={base} onChange={(e)=> setBase(Number(e.target.value))} type="number" />

        <p>Coloque o tamanho da altura</p>

        <input value={altura} onChange={(e)=> setAltura(Number(e.target.value))} type="number" />

        <button onClick={()=> Quadradinho()}> Fazer Quadrado </button>

        <div className="results">{resul.map(item => <h2>{ item }</h2>)}</div>
        
    </main>

    )
}