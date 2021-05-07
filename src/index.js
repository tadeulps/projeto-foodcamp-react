import ReactDOM from "react-dom";
import Topo from "./Topo/Topo"
import Menu from "./Menu/Menu"
import Barra from "./BarraFinal/Barra"
import React from "react";
function App() {
    const [ativador,setAtivador]=React.useState(false);
    const [todosPratos, setTodosPratos] = React.useState([]);
    const [todasBebidas, setTodasBebidas] = React.useState([]);
    const [todasSobremesas, setTodasSobremesas] = React.useState([]);
    return (
        <>
        <Topo/>
        <Menu ativador={ativador} setAtivador={setAtivador}
        todosPratos={todosPratos} setTodosPratos={setTodosPratos} 
        todasBebidas={todasBebidas} setTodasBebidas={setTodasBebidas}
        todasSobremesas={todasSobremesas} setTodasSobremesas={setTodasSobremesas}/>
        <Barra ativador={ativador} setAtivador={setAtivador}
         todosPratos={todosPratos} 
         todasBebidas={todasBebidas} 
         todasSobremesas={todasSobremesas}/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));