import React from 'react'
import TabelaProdutos from "../../data/produtos"
import TabelaStyle from "../Repeticao/TabelaProdutos.css"

export default props => {

    const produtos = TabelaProdutos.map((produto, i)=>{
        return (          
            <tr key={produto.id} className={i % 2 === 0 ? "par" : "impar"}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    R$ {produto.preco.toFixed(2).replace(".",",")}
                </td>
            </tr>                
        );
    });

    return(
        <div className="tabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>

                        <th>
                            Nome
                        </th>

                        <th>
                            Preço
                        </th>                        
                    </tr>                    
                </thead>

                <tbody>
                    
                 {produtos}
                    
                </tbody>
            </table>
        </div>
    );
}