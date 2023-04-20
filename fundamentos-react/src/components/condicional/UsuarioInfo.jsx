import React from "react";
import Ifb from "./Ifb";


export default function UsuarioInfo(props){
    const usuario = props.usuario || {}
    return(
        <div>
            <Ifb teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!            
            </Ifb>
            <Ifb teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </Ifb>
            
        </div>
    )
}