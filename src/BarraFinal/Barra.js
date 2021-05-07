import Botao from "./Botao"

export default function Barra(props){
   return(
    <div class="footer">
    <Botao ativador={props.ativador}
     todosPratos={props.todosPratos} 
     todasBebidas={props.todasBebidas} 
     todasSobremesas={props.todasSobremesas}/>
    </div>
   )
}
