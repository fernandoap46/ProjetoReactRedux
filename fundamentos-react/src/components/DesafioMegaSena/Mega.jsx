import React, { useState } from "react";

export default function Mega (props){

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max +1 - min))+min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array): aleatorio
    }
    
    function gerarNumero(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums)=>{
            const novoNumero=gerarNumeroNaoContido(1,60,nums)
            return [...nums, novoNumero]
        },[])
    
        .sort((n1,n2)=>n1 -n2)
    
        return numeros
    }
    const qtde= props.qtde || 6
    const numerosIniciais =Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div>
            <h2>Mega Sena </h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ =>setNumeros(gerarNumero(qtde))}>Gerar Números</button>
        </div>
    )
}