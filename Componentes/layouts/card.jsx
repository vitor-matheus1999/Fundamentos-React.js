import React from 'react';

import CardEstilo from "../layouts/card.css"

export default (props)=>{

    const estiloCard = {

        backgroundColor:props.cor || "red" ,
        borderColor: props.cor || "red",
    }


    return (

        <div className="Card" style={estiloCard}>
            
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo" >
             {props.children} {/* É possível passar várias propriedades para o componente*/}
            </div>
        </div>
    )
}