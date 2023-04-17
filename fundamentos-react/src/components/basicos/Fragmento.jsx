import React from "react";

export default function Fragmento(props){

    return(
        <div>
            {/* voce pode usar fragmentos tando chamando react.Fragment ou <></> sem precisar envolver em uma div*/}
            <>
                <h2>Fragmento</h2>
                <p>Cuidado com este erro!</p>
            </>
        </div>
    )

}