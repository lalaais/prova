import './index.scss'
import React from "react";

import { useNavigate } from 'react-router-dom'


export default function Home() {
const navigate = useNavigate('');


    return(
        <div className='inicial'>
            <h1 className=''>Provas Surpresa</h1>
            <button className='button1' onClick={() => navigate("/acai")}>Açai</button>
            <button className='button2' onClick={() => navigate("/signo")}>Signo</button>
            <button className='button3' onClick={() => navigate("/sorveteria")}>Sorveteria</button>
            <button className='button4' onClick={() => navigate("/salario")}>Salário</button>
            <button className='button5' onClick={() => navigate("/viagem")}>Viagem</button>
            <button className='button6' onClick={() => navigate("/febre")}>Febre</button>
            <button className='button7' onClick={() => navigate("/orcamento")}>Orçamento</button>
            <button className='button8' onClick={() => navigate("/cinema")}>Cinema</button>
            <button className='button9' onClick={() => navigate("/contador")}>Contador</button>
            <button className='button10' onClick={() => navigate("/linha")}>Linhas</button>
            <button className='button11' onClick={() => navigate("/quadrado")}>Quadrado</button>
        </div>
        
    )
}
