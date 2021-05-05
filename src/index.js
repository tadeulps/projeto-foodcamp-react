import ReactDOM from "react-dom";
import Topo from "./Topo/Topo"
import Menu from "./Menu/Menu"
function App() {
    return (
        <>
        <Topo/>
        <Menu/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));