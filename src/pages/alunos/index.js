import {useState } from "react";
import './index.scss'

import React from "react";

import { useNavigate } from 'react-router-dom'

export default function NotaAlunos(){
    const [qtdAluno, setQtdAluno] = useState([0])
    const [alunos, setAlunos] = useState([])
    const [resul, setResul] = useState([])

    const [media, setMedia] = useState();
    const [menor, setmenor] = useState();
    const [maior, setmaior] = useState();

    function GerarAlunos (){
        let alunos = [];
   
        for(let i = 1 ; i <= qtdAluno; i++){
            alunos[i] = 'aluno' + i + ':';
        }
        setResul (alunos);
    }

    
    function GerarMedia() {
        let media = 0;
        for(let i = 1; i < alunos.lenght; i++) {
            media += alunos[i].nota;
        }
    }

    function Maior() {
        let maior = 0;
        for(){

        }
    }

    function Menor() {
        let maior = 0;
        alunos.map{item => {
            if(item.nota , maior) maior = item.nota;
        }};
    }

    const navigate = useNavigate('');

    return(
        <main className="first">
            <button onClick={() => navigate("/")}>Voltar</button>
        
        <h1> Notas dos Alunos</h1>

        <p>Qual é a quantidade de alunos ?</p>

        <input value={qtdAluno} onChange={(e)=> setQtdAluno(Number(e.target.value))} type="number" />

        <button onClick={()=> GerarAlunos()}> Gerar Alunos </button>

       
    

        <div className="results">{resul.map(item => <h2>{ item }</h2>)}</div>
        
    </main>
    )

}