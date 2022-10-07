import './index.scss'
import React from "react";

import { useNavigate } from 'react-router-dom'


export default function Home() {
const navigate = useNavigate('');


    return(
        <div className='inicial'>
            <h1 className=''>Provas Surpresa</h1>
            <button className='button1' onClick={() => navigate("/acai")}>Açai</button>
            <button className='button2' onClick={() => navigate("/sorveteria")}>Sorveteria</button>
            <button className='button3' onClick={() => navigate("/signo")}>Signo</button>
        </div>
        
    )
}
