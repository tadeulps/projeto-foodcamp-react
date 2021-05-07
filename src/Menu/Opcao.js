import React from 'react';
export default function Opcao(props){
    const [classe, setClasse] = React.useState('opcao');   
    const [contador,setContador]=React.useState(1);
    const [selecionados,setSelecionados]=React.useState('')
    const { todosOpcoes, setTodosOpcoes } = props;
    const [controladora,setControladora]=React.useState(true)

    return(
    <div class={classe} onClick={Selecionar}>
        
        <img src={`img/${props.imagem}.png`} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="caixa-inferior">
        <div class="preco">R$ {props.preco}</div>
        
        <div class="contador"> 
         <p onClick={diminuir}>-</p> <p>{contador}</p> <p onClick={aumentar}>+</p> 
        </div>
        </div>
    </div>
    )
    function Selecionar(){
        if(classe=="opcao"){
        setClasse('opcao selecionado');
        if(controladora){
        setTodosOpcoes([...todosOpcoes,  
            {nome: props.titulo,
            preco: props.preco,
            contador: 1}])}
            setControladora(false)
        }
        //se selecionado
        //habilitar o contador
        //se contador igual a zero
        //retira o selecionado
        
    }
    function diminuir(){
        if(contador > 1){
            setContador(contador - 1)
            excluiItens()
        }else{
            setClasse('opcao')
            setContador(1)
            setTodosOpcoes(todosOpcoes.filter((t)=>t.nome!=props.titulo))
            setControladora(true)
        }
    }
    function aumentar(){
        setContador(contador+1)
        
        incluiItens();
    }
    function incluiItens() {
        const itemSelecionado = {
          nome: props.titulo,
          preco: props.preco,
          contador: contador+1,
        };
        const novaArray = todosOpcoes.filter((t)=>t.nome!=props.titulo);
        setTodosOpcoes([...novaArray,itemSelecionado]);
        
      }
      function excluiItens() {
        const itemSelecionado = {
          nome: props.titulo,
          preco: props.preco,
          contador: contador-1,
        };
        const novaArray = todosOpcoes.filter((t)=>t.nome!=props.titulo);
        setTodosOpcoes([...novaArray,itemSelecionado]);
        
      }
}

