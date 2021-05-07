import Opcao from "./Opcao"
import React from "react";

export default function Sobremesa(props){
    const {todasSobremesas, setTodasSobremesas} = props;
    const cardapio=[
        {imagem:"pudim",titulo:"pudim",descricao:"pudim de leite",preco:"14,90"},
        {imagem:"pudim",titulo:"pave",descricao:"pave de oreo",preco:"24,90"},
        {imagem:"pudim",titulo:"brownie",descricao:"de café",preco:"34,90"},
        
    ]
    return(
        <div class="opcoes bebidas">
        {cardapio.map(t => {
            return(
                
                <Opcao imagem={t.imagem} titulo={t.titulo} descricao={t.descricao} preco={t.preco} categoria="sobremesa" todosOpcoes={todasSobremesas} setTodosOpcoes={setTodasSobremesas}/>
      
              
            );
         })}
      </div>
    )
}