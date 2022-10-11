import React, { useEffect, useState } from "react";

export default function Salario() {

    const [febrinha, setFebrinha] = useState();
    const [resul, setResul] = useState();

    function febre () {
        if(febrinha >= 41) setResul('Hipertemia');
        else if(febrinha >= 39 && febrinha < 41) setResul('Febre Alta')
        else if(febrinha >= 37.6 && febrinha < 39.6 ) setResul('Febre')
        else if(febrinha >= 36 && febrinha < 37.6) setResul('Normal')
        else if(febrinha < 36) setResul('Hipotermia')
    }
    

    return(
        <div>
           <label>Teste a febre</label>
           <input value={febrinha} onChange={(e)=> setFebrinha(Number(e.target.value))} type="text"/> 
           <button onClick={()=>febre()}>Teste</button>
            <h1>{resul}</h1>
        </div>
    )
}