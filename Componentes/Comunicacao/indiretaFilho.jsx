import React from 'react'

export default props =>{

    const callback = props.quandoClicado;
    const gerarIdade = () => parseInt(Math.random()* (20)) + 50; // maneira de escrever função
    const gerarAltura = () => Math.random() > 0.5;

    return(
        <div>
            <div>Filho</div>
            <button onClick={ _ =>callback("Arthur", gerarIdade,gerarAltura)}> 
                Fornecer informações pelo Console 
            </button>
        </div>
    );
}