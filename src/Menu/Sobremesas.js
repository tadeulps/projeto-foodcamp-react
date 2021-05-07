import Sobremesa from "./Sobremesa"
import React from "react";
export default function Sobremesas(props){
  const {todasSobremesas, setTodasSobremesas} = props;
    return(
        <div class="secao">
        <div class="titulo">Por fim, sua sobremesa</div>
        <Sobremesa todasSobremesas={todasSobremesas} setTodasSobremesas={setTodasSobremesas}/>
      </div>
    )
}