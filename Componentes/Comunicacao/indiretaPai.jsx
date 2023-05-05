import React,{useState} from 'react'
import IndiretaFilho from './indiretaFilho'

export default props =>{
    
    const [nome, setNome] = useState("?");
    const[idade, setIdade] = useState(0);
    const[alto, setAltura] = useState(false);
    
    function forneceInformacoes(nome, idade, alto){
        setNome(nome);
        setIdade(idade);
        setAltura(alto);
    }

    return(
        <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong></span>
            <span> {alto ? "Alto" : "Baixo"}</span>
            <IndiretaFilho quandoClicado={forneceInformacoes}/>
        </div>
    );
}