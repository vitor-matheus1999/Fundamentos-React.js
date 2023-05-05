import React from "react"

import ReactDOM from "react-dom"

// export default function sorteiaNum (props){


//     const pergunta = parseInt(prompt("ADIVINHA A MERDA DE UM NÚMERO OTÁRIO"));

//     const numero = Math.round(Math.random() * props.Numero);

//     const sorteio = numero == pergunta ? alert("PARABENS CORNO") : alert("errou trouxa");

//     console.log(numero);
      
// } 

export default (props)=>{

    const {min , max} = props;

    const aleatorio = parseInt(Math.random()*(max - min)) + min;
    return(

        <div>
            <h2>Valor Aleatório</h2>

            <p>
                <strong> Valor Mínimo: </strong> {min}
            </p>

            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>

            <p>
                <strong> Valor Escolhido: </strong> {aleatorio}
            </p>

        </div>
    )
}