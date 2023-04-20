import './TabelaProdutos.css';
import React from "react";
import produtos from "../data/produtos";

export default function TabelaProdutos(props){
    function getLinhas(){
        return produtos.map((produtos, i) =>{
            return(
                <tr key={produtos.id} className={i % 2 == 0 ? 'Par' : ''}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R${produtos.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {getLinhas()}
                </tbody>
            </table>

        </div>
    )
}