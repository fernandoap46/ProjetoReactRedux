import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return(
        <div>
            <DiretaFilho texto="Filho1" numero ={20} boll={true}></DiretaFilho>
            <DiretaFilho texto="Filho2" numero ={17} boll={false}></DiretaFilho>
        </div>
    )
}