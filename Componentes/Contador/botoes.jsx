import React from 'react'

const botoes = props => {

    return (
        <div>
            <button onClick={props.onIncremento}>+</button>
            <button onClick={props.onDecremento}>-</button>
        </div>
    );
}

export default botoes;