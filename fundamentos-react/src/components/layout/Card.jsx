import "./Card.css";
import React from "react";

export default function Card (props) {
    const Cardestilo={
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    return(
        <div className="Card" style={Cardestilo}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
};