import './Contador.css'
import React from "react";

class Contador extends React.Component{

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

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                {/* this. aponta par estância atual, o acesso será atraves do props,
                 ou seja as propriedades desta stância é numeroInicial*/}
                <p>{this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}></input>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }

}

export default Contador