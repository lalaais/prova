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
        <div>
            <label>capacidade</label>
            <input value={capac} onChange={(e) => setCapac(Number(e.target.value))} type="text" />
            
            <label>consumo</label>
            <input value={consumo} onChange={(e) => setConsumo(Number(e.target.value))} type="text" />
            
            <label>distancia</label>
            <input value={dist} onChange={(e) => setDist(Number(e.target.value))} type="text" />
            <button onClick={()=>calcular()}>Calcular</button>
            <h1>{resul}</h1>
        </div>
    )
}