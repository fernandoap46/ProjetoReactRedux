import './App.css'
import React from "react";

import TabelaProdutos from './Repeticao/TabelaProdutos';
import ListaAluno from './Repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from "./layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import PrimeiroComponente from './components/basicos/PrimeiroComponente'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



export default function App(props) {
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

            <Card titulo="#07 Desafio Repetição" color="#CC99CC">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 Lista Aluno" color="#CC99FF">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo="#05 Componente com Filhos" color="#CC99CC">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>                    
                </Card>

                <Card titulo="#04 Desafio Aleatório" color="#CC9999">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03 Fragmento" color="#CC9966F">
                    <Fragmento/>
                </Card>

                <Card titulo="#02 Desafio Aleatório"color="#CC9933">
                    <ComParametro 
                        titulo="Segundo componente" 
                        aluno="Fernando " 
                        nota={10}>
                    </ComParametro>
                </Card>

                <Card titulo="#01 Primeiro Programa"color="#CC9900">
                    <PrimeiroComponente></PrimeiroComponente>  
                </Card> 
            </div>          
            
              
        </div>

    )
}