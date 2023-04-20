import React from "react";
import If from '../condicional/If';


export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return(
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!            
            </If>
            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </If>
            
        </div>
    )
}