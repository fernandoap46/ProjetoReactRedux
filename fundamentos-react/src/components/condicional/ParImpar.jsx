import React from "react";

export default function ParImpar(props) {
    const isPar = props.numero %2 === 0
    return (
        <div>
            {isPar ? <span>Par</span> : <span>Impar</span>}            
            
        </div>
    )
}