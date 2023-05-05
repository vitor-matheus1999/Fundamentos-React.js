import React from 'react'

const somaForm = props =>{
    return(
        <div>
            <label htmlFor='somar'>Somar:</label>
                    <input
                        id='somar'
                        type="number"
                        value={props.passo}
                        onChange={e => props.setSoma(+e.target.value)}
                    />
        </div>
    )
}

export default somaForm;