import React from 'react'
import listaAlunos from '../../data/lista'
 
export default props => {   
    const alunos = listaAlunos.map((aluno) => {
        return (
            <li key={aluno.nome}>
                {aluno.id}) {aluno.nome} = {aluno.nota}
            </li>
        );
    });

    return(
        <div>
            <ul style={{listStyle: "none"}}>
                {alunos}
            </ul>
        </div>
    );
};