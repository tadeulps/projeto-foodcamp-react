import Bebida from "./Bebida"
import React from "react";

export default function Bebidas(props){
  const {todasBebidas, setTodasBebidas} = props;
    return(
      <div class="secao">
        <div class="titulo">Agora, sua bebida</div>
        <Bebida todasBebidas={todasBebidas} setTodasBebidas={setTodasBebidas}/>
      </div>
    )
}