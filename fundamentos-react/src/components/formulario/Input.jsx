import'./Input.css';
import React, { useState } from "react";

export default function Input(props){

    const [valor, setValor] = useState ('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div className='Inputs'>
                {/* com o onChange o componente mudando o state muda */}
                <input value={valor} onChange={quandoMudar}/>
                {/* quando temos um componente somente de leitura não precisamos do onChange como a cima */}
                <input value={valor} readOnly/>
                {/* exemplo de componente não controlado não associado a nenhum state */}
                <input value={undefined} />
            </div>
        </div>
    )
}