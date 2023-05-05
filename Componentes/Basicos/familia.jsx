import React, {cloneElement} from "react";

export default props=>{
    return(       
        <>
            {

            /* <MembroFamilia nome="Julio" sobrenome={props.sobrenome}> </MembroFamilia> 
            <MembroFamilia nome="Antonio" {...props}> </MembroFamilia>  (***Operador spread***)
            <MembroFamilia nome="Ana" sobrenome="Silva"> </MembroFamilia> */

            
            // React.Children.map(props.children, child => {
            //     return cloneElement(child, props) o clone Element irá passar as propriedades do pai para um unico filho.
            // })  primeiro método criado para fazer com a informação no componente pai fosse para os filhos 
            // É colocado o "map" para mapear o array, depois é criado uma função que retorna o "clone Elemente"
            // com a informação do componente filho, seguida da informação do componente pai.
            // esse método é melhor utilizado caso só tenha o acesso ao elemento pai e não aos filhos.
            

                props.children.map((child, inventario)=>{

                    return cloneElement(child,{...props, key:inventario});
                })
            }
        </>         
    );
}