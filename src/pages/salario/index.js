import React, { useEffect, useState } from "react";

export default function Salario() {
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resul, setResul] = useState();
    function calcular(){
        setResul(((salario / 100) * bonus) + salario - desconto);
    }
    return(
        <div>
            <label>Salario</label>
            <input value={salario} onChange={(e) => setSalario(Number(e.target.value))} type="text" />
            
            <label>Bonus %</label>
            <input value={bonus} onChange={(e) => setBonus(Number(e.target.value))} type="text" />
            
            <label>Desconto R$</label>
            <input value={desconto} onChange={(e) => setDesconto(Number(e.target.value))} type="text" />
            <button onClick={()=>calcular()}>Calcular</button>
            <h1>{resul}</h1>
        </div>
    )
}