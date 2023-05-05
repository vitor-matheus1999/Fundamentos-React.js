import "./app.css"
import React from "react"

import Primeiro from './Componentes/Basicos/Primeiro';
import ComParametro from './Componentes/Basicos/ComponenteParametro';
import Fragmentos from './Componentes/Basicos/fragmentos';
import Sorteio from './Componentes/Basicos/aleatório';
import Card from "./Componentes/layouts/card";
import Familia from "./Componentes/Basicos/familia";
import MembroFamilia from "./Componentes/Basicos/membroFamilia";
import ListaAlunos from "./Componentes/Repeticao/ListaAlunos";
import TabelaProdutos from "./Componentes/Repeticao/tabelaProdutos";
import ParOuImpar from "./Componentes/condicional/parOuImpar";
import InfoUsuario from "./Componentes/condicional/infoUsuario";
import IndiretaPai from "./Componentes/Comunicacao/indiretaPai";
import Input from "./Componentes/Formulario/input"
import Contador from "./Componentes/Contador/Contador"



const app = () =>  //function app (props)//{

    //return (

    <div className="App" >

        <h1>Estudos sobre React</h1>

        <div className="Flex-box">

            <Card titulo="Primeiro" cor="IndianRed">

                <Primeiro></Primeiro>
            </Card>

            <Card titulo="Com Parâmentro" cor="LightCoral">
                <ComParametro
                    Aluno=' João Lucas'
                    Nota={8.5} />
            </Card>

            <Card titulo="Fragmentos" cor="Salmon">

                <Fragmentos />
            </Card>

            <Card titulo="Sorteio" cor="DarkSalmon">
                {/* <Sorteio 
                    Numero={10} /> feito por mim */}

                <Sorteio
                    min={10}
                    max={0} />    {/* Feito pelo professor*/}
            </Card>

            <Card titulo="Componentes Filhos" cor="LightSalmon">

                <Familia sobrenome=" Oliveira">

                    <MembroFamilia nome="Aline" />
                    <MembroFamilia nome="João" />
                    <MembroFamilia nome="Carlos" />
                </Familia>

            </Card>

            <Card titulo="Repetição" cor="Coral">

                <ListaAlunos></ListaAlunos>

            </Card>

            <Card titulo="Tabela de Produtos" cor="Tomato">

                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="Renderização Condicional" cor="Red">

                <ParOuImpar numero={14}></ParOuImpar>

                <InfoUsuario usuario={{ nome: "Lucas" }}></InfoUsuario>
            </Card>

            <Card titulo="Comunicação Indireta" cor="OrangeRed">

                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="Componente Controlado e Não controlado" cor="DarkOrange">

                <Input></Input>
            </Card>

            <Card titulo="Contador - Utilizando Componente com Classe" cor="Orange">

                <Contador numeroInicial={10}></Contador>
            </Card>
        </div>
    </div>
// );
//};

export default app;

