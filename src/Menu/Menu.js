import Pratos from "./Pratos"
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"
import Barra from "../BarraFinal/Barra"
import React from "react";


export default function Menu(props){

  const {todosPratos, setTodosPratos} = props;
  const {todasBebidas, setTodasBebidas} = props;
  const {todasSobremesas, setTodasSobremesas} = props
  
  if(todosPratos.length>0 && todasBebidas.length>0 && todasSobremesas.length>0 ){
    props.setAtivador(true)
    console.log('foii')
  }else{
    console.log('alo')
    props.setAtivador(false)
  }
    return(
    <div class="menu">
      <Pratos todosPratos={todosPratos} setTodosPratos={setTodosPratos}/>

      <Bebidas todasBebidas={todasBebidas} setTodasBebidas={setTodasBebidas}/>

      <Sobremesas todasSobremesas={todasSobremesas}   setTodasSobremesas={setTodasSobremesas}/>
    </div>
    )
}