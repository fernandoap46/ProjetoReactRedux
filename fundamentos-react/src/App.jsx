import './App.css'
import React from "react";

import ContadorB from './components/contador/ContadorB';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Diretapai from './components/comunicacao/Diretapai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParImpar from './components/condicional/ParImpar';
import TabelaProdutos from './components/Repeticao/TabelaProdutos';
import ListaAluno from './components/Repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import PrimeiroComponente from './components/basicos/PrimeiroComponente'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'



export default function App(props) {
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#13 Contador com reaproveitamento de componente" color="#CC99CC">
                    <ContadorB numeroInicial={10}/>
                </Card>

                <Card titulo="#12 Contador" color="#CC99CC">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 Componente Controlado (Input)" color="#CC99CC">
                    <Input></Input>
                </Card>

                <Card titulo="#10 Comunicação Indireta" color="#CC99CC">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 Comunicação direta" color="#CC99CC">
                    <Diretapai></Diretapai>
                </Card>

                <Card titulo="#08 Par ou Impar" color="#CC99CC">
                    <ParImpar numero={20}></ParImpar>
                    <UsuarioInfo usuario={{nome:'Fernando'}}/>
                    <UsuarioInfo/>
                </Card>

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