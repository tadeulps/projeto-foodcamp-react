import ReactDOM from "react-dom";
import Topo from "./Topo/Topo"
import Menu from "./Menu/Menu"
import Barra from "./BarraFinal/Barra"
function App() {
    return (
        <>
        <Topo/>
        <Menu/>
        <Barra/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));