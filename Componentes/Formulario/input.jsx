import '../Formulario/input.css'

import React,{useState} from 'react'

export default (props) =>{

    const [valor, setValor]= useState("Valor Padrão");


    function alterarValor(evento){

        setValor(evento.target.value)
    }

    return(
        <div className="input">
            <h2>{valor}</h2>
            <div className="exemplos">
                <p>Componente controlado </p> <input value={valor} onChange={alterarValor}/> 
                <p>Componente Apenas para leitura</p> <input value={valor} readOnly/>
                <p>Componente não controlado</p> <input value={undefined}/>
            </div>
        </div>
    );
}