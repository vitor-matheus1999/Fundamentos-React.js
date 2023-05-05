import React from 'react'

export default function Paramentro (props){

    const status = props.nota <= 6 ? 'Reprovado' : 'Aprovado';

    return (

        <div>
        
            <h1>Situação do Aluno</h1>
            <p>O nome do Aluno é {props.Aluno} e sua nota é {props.Nota}</p>
            <p> O Aluno está {status} </p>

        </div>
    )
}