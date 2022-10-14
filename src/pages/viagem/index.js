import React, { useEffect, useState } from "react";

export default function Viagem() {
    const [capac, setCapac] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [dist, setDist] = useState(0);
    const [resul, setResul] = useState();
    function calcular(){
        setResul(Math.ceil((dist / consumo) / capac));
    }
    return(
        <div className="incial">
            
            <h1>Calcular Paradas</h1>

            <p>capacidade</p>
            <input value={capac} onChange={(e) => setCapac(Number(e.target.value))} type="text" />
            
            <p>consumo</p>
            <input value={consumo} onChange={(e) => setConsumo(Number(e.target.value))} type="text" />
            
            <p>distancia</p>
            <input value={dist} onChange={(e) => setDist(Number(e.target.value))} type="text" />
            <button onClick={()=>calcular()}>Calcular</button>
            <h6>{resul}</h6>
        </div>
    )
}