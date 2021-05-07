import Prato from "./Prato";
import React from "react";

export default function Pratos(props){
  const {todosPratos, setTodosPratos}=props
    return(
        <div class="secao">
          <div class="titulo">Primeiro, seu prato</div>
          <Prato todosPratos={todosPratos} setTodosPratos={setTodosPratos}/>
        </div>
      
    )
}