import React from 'react';
export default function Opcao(props){
    const [opcao, setOpcao] = React.useState('opcao');
    const [contador,setContador]=React.useState('contador escondido');
    const [item,setItem]=React.useState(1)
    return(
    <div class={opcao} onClick={Selecionar}>
        <img src={`img/${props.imagem}.png`} />
        <div class="titulo">{props.titulo}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="caixa-inferior">
        <div class="preco">R$ {props.preco}</div>
        
        <div class={contador}> 
         <p onClick={diminuir}>-</p> <p>{item}</p> <p onClick={aumentar}>+</p> 
        </div>
        </div>
    </div>
    )
    function Selecionar(){
        setOpcao('opcao selecionado');
        setContador('contador')
        
        // se selecionado
        //habilitar o contador
        //se contador igual a zero
        //retira o selecionado
        if(item===0){
            setOpcao('opcao')
            setItem(1)
            setContador('contador escondido')
        }
    }
    function diminuir(){
        setItem(item-1)
        console.log(item)
       
    }
    function aumentar(){
        setItem(item+1)
        console.log(item)
    }
    
}

