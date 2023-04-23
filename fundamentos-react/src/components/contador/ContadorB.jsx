import './Contador.css'
import React from "react";

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class ContadorB extends React.Component{

    state={
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    // constructor(props){
    //     super(props)
    //     this.inc=this.inc.bind(this)
    // }

    inc=()=>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec=()=>{
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }

    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                {/* this. aponta par estância atual, o acesso será atraves do props,
                 ou seja as propriedades desta stância é numeroInicial*/}
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
               
            </div>
        );
    }

}

export default ContadorB