import Opcao from "./Opcao"
import React from "react";

export default function Prato(props){
    
    const {todosPratos, setTodosPratos}=props
    
    const cardapio=[
        {imagem:"frango_yin_yang",titulo:"Frango Yin Yang",descricao:"Um pouco de batata, um pouco de salada",preco:"14,90"},
        {imagem:"frango_yin_yang",titulo:"Carne Yin Yang",descricao:"Um pouco de salada",preco:"24,90"},
        {imagem:"frango_yin_yang",titulo:"Peixe Yin Yang",descricao:"Um pouco de farofa",preco:"34,90"},
        
    ]
    return(
        <div class="opcoes pratos">
        {cardapio.map(t => {
            return(
                <Opcao imagem={t.imagem} titulo={t.titulo} descricao={t.descricao} preco={t.preco} categoria="prato" todosOpcoes={todosPratos} setTodosOpcoes={setTodosPratos}/>
            );
         })}
      </div>
      
    )
}