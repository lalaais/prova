import React, { useEffect, useState } from "react";
import './index.scss';

import { useNavigate } from 'react-router-dom'

export default function Sorveteria() {
    const [gramas, setGramas] = useState();
    const [resul, setResul] = useState('');

    function calcular() {
        let total;
        if(gramas >= 1000) total = (gramas / 100) * 3;
        else total = (gramas / 100) * 3.50
    
        if(gramas < 0) setResul('Digite um valor valido!');
        else setResul(`O total a pagar é ${total.toFixed(2)}`);
    }

    useEffect(()=>{
        calcular();
    },[gramas]);

    const navigate = useNavigate('');
    
    return(
        <div className="primeira">
            <button onClick={() => navigate("/Home")}>Voltar</button>

            <h1>Sorveteria</h1>
            
            <label>Digite as gramas de sorvete</label>
            <input  value={gramas} onChange={(e)=> setGramas(Number(e.target.value))} type="number" />
            {resul}
        </div>
    )
}