import Opcao from "./Opcao"
import React from "react";
export default function Bebida(props){
    const {todasBebidas, setTodasBebidas} = props;
    const cardapio=[
        {imagem:"coquinha_gelada",titulo:"coca",descricao:"uma coca",preco:"14,90"},
        {imagem:"coquinha_gelada",titulo:"fanta uva",descricao:"lata de fanta",preco:"24,90"},
        {imagem:"coquinha_gelada",titulo:"guarana",descricao:"guarazin",preco:"34,90"},
        
    ]
    return(
        <div class="opcoes bebidas">
        {cardapio.map(t => {
            return(
                
                <Opcao imagem={t.imagem} titulo={t.titulo} descricao={t.descricao} preco={t.preco} categoria="bebida" todosOpcoes={todasBebidas} setTodosOpcoes={setTodasBebidas}/>
      
              
            );
         })}
      </div>
    )
}