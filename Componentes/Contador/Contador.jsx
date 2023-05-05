import '../Contador/contador.css'

import React, { Component } from 'react'
import Display from './display'
import Botoes from './botoes'
import SomaForm from './somaForm'

class Contador extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //         numero:props.numeroInicial  
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        somar: this.props.somarDe || 1
    }

    incremento = () => {
        this.setState({ numero: this.state.numero + this.state.somar });
    }

    decremento = () => {
        this.setState({ numero: this.state.numero - this.state.somar });
    }

    setSoma = (novoPasso) => {
        this.setState({ somar: novoPasso });
    }

    render() {
        return (
            <div className="inputsEButtons">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <SomaForm passo={this.state.somar} setSoma={this.setSoma}/>
                <Botoes onIncremento={this.incremento} onDecremento={this.decremento}/>
            </div>
        );
    }
}


export default Contador;